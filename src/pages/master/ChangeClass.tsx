import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HeaderInstance, LoginInstance } from "../../api/axios";
import { GoSearch } from "react-icons/go";
import { FaDownload } from "react-icons/fa";
import TabMenu from "../../components/TabMenu";
import ChangeClassModal from "../../components/modal/ChangeClassModal";

type User = {
    birth: string;
    email: string;
    name: string;
    regDt: string;
    className: string;
    seq: number;
};

export default function ChangeClass() {
    const [userList, setUserList] = useState<User[]>([]);
    const [userInfo, setUserInfo] = useState({
        seq: 0,
        className: "",
        name: "",
    });
    const [modal, setModal] = useState(false);

    const fetchUserList = async () => {
        try {
            const res = await HeaderInstance.get("/api/member/stu/list");
            console.log(res);
            setUserList(res.data.studentList);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchUserList();
    }, []);

    const handleDown = () => {
        LoginInstance.get("/api/class/excel")
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };
    return (
        <section>
            <TabMenu menu="반 변경" />
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
                        ({ className, name, email, birth, regDt, seq }) => {
                            return (
                                <tr key={seq}>
                                    <td>
                                        <input
                                            name={seq.toString()}
                                            type="checkbox"
                                            onChange={(e) => {
                                                setUserInfo({
                                                    seq,
                                                    className,
                                                    name,
                                                });
                                            }}
                                        />
                                    </td>
                                    <td>{className}</td>
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
            <ManageForm>
                <StyledGoSearch />
                <input type="text" placeholder="이름을 검색하세요." />
            </ManageForm>
            <button
                className="absolute top-[950px] right-10 p-4 border rounded-full border-menuColor text-mainColor bg-menuColor hover:text-white hover:bg-mainColor"
                onClick={() => {
                    setModal(!modal);
                }}
            >
                반 병경
            </button>
            <div>
                <a
                    className="flex items-center text-2xl ml-9"
                    href="http://192.168.0.140:8686/api/class/excel"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaDownload
                        onClick={handleDown}
                        className="mr-4 text-green-400"
                    />
                    <p>변경 반 엑셀 다운로드</p>
                </a>
            </div>
            {modal && (
                <ChangeClassModal setModal={setModal} userInfo={userInfo} />
            )}
        </section>
    );
}

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
`;
const StyledGoSearch = styled(GoSearch)`
    position: absolute;
    top: 5px;
    left: 45px;
    font-size: 20px;
`;
