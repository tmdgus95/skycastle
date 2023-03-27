import styled from "styled-components";
import TabMenu from "../../components/TabMenu";
import Button from "../../components/UI/Button";
import { GoSearch } from "react-icons/go";

const ManagementUser = () => {
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
                    <tr>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td>학생</td>
                        <td>옥지은</td>
                        <td>00.00.00</td>
                        <td>asdf@asdf</td>
                        <td>00.00.00</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td>학생</td>
                        <td>옥지은</td>
                        <td>00.00.00</td>
                        <td>asdf@asdf</td>
                        <td>00.00.00</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td>학생</td>
                        <td>옥지은</td>
                        <td>00.00.00</td>
                        <td>asdf@asdf</td>
                        <td>00.00.00</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </ManageTable>
            <ManageForm>
                <StyledGoSearch />
                <input type="text" placeholder="이름을 검색하세요." />
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
