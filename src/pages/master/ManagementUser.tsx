import styled from "styled-components";
import TabMenu from "../../components/TabMenu";
import Button from "../../components/UI/Button";
import { GoSearch } from "react-icons/go";
import { HeaderInstance } from "../../api/axios";
import { useState } from "react";
import { useQuery, useMutation } from "react-query";

type User = {
    birth: string;
    email: string;
    name: string;
    regDt: string;
    role: string;
    seq: number;
};

const ManagementUser = () => {
    const [deleteUser, setDeleteUser] = useState(0);
    const [searchName, setSearchName] = useState("");
    const [page, setPage] = useState(0);
    const [activePage, setActivePage] = useState(0);
    const { data: userList = [], refetch } = useQuery<User[]>(
        ["userList", searchName],
        async () => {
            const address =
                searchName === ""
                    ? `/api/member/list?page=${page}`
                    : `/api/member/list?page=${page}&keyword=${searchName}`;
            const res = await HeaderInstance.get(address);
            return res.data.memberList;
        }
    );

    const handlePageClick = (pageNumber: number) => {
        setPage(pageNumber);
        setActivePage(pageNumber);
        refetch();
    };
    const { mutate: deleteUserMutation } = useMutation((seq: number) =>
        HeaderInstance.get(`/api/member/drop?seq=${seq}`)
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchName(e.target.value);
    };
    const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDeleteUser(parseInt(e.target.name));
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        deleteUserMutation(deleteUser, {
            onSuccess: (res) => {
                console.log(res);
                if (res.data.message === "이미 탈퇴 상태 입니다.") {
                    alert(res.data.message);
                } else {
                    alert("회원탈퇴가 완료되었습니다.");
                }
            },
            onError: (err) => console.log(err),
        });
    };
    return (
        <>
            <TabMenu menu="계정관리" />
            <ManageTable>
                <thead>
                    <tr>
                        <th></th>
                        <th>구분</th>
                        <th>이름</th>
                        <th>생년월일</th>
                        <th>이메일</th>
                        <th>등록일</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map(
                        ({ role, name, email, birth, regDt, seq }) => {
                            return (
                                <tr key={seq}>
                                    <td>
                                        <input
                                            type="checkbox"
                                            name={seq.toString()}
                                            onChange={handleCheck}
                                        />
                                    </td>
                                    <td>{role}</td>
                                    <td>{name}</td>
                                    <td>{birth}</td>
                                    <td>{email}</td>
                                    <td>{regDt}</td>
                                </tr>
                            );
                        }
                    )}
                </tbody>
            </ManageTable>
            <div className="text-center">
                {[...Array(10)].map((_, index) => (
                    <button
                        className={`p-1.5 m-1.5 rounded-3xl hover:bg-pointColor ${
                            activePage === index
                                ? "bg-mainColor text-white"
                                : "bg-menuColor"
                        }`}
                        key={index}
                        onClick={() => handlePageClick(index)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
            <ManageForm onSubmit={handleSubmit}>
                <StyledGoSearch />
                <input
                    type="text"
                    placeholder="이름을 검색하세요."
                    onChange={handleChange}
                />
                <Button title="정보 삭제" />
            </ManageForm>
        </>
    );
};

const ManageTable = styled.table`
    margin-top: 75px;
    margin-left: 39px;
    width: 95%;
    th {
        height: 62px;
        background-color: ${(props) => props.theme.colors.menuColor};
        border-bottom: 1px solid;
    }
    tbody {
        text-align: center;
        td {
            height: 62px;
            border-bottom: 1px solid;
        }
    }
`;

const ManageForm = styled.form`
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 0 39px;
    margin-top: 14px;
    input {
        width: 199px;
        font-weight: 400;
        font-size: 20px;
        outline: none;
        padding-left: 30px;
    }
    button {
        margin-top: 46px;
    }
`;

const StyledGoSearch = styled(GoSearch)`
    position: absolute;
    top: 32px;
    left: 45px;
    font-size: 20px;
`;

export default ManagementUser;
