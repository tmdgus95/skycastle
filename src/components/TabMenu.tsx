import styled from "styled-components";

interface IMenu {
    title: string[];
}

const TabMenus = ["학생현황"];

const TabMenu = ({ menu }: any) => {
    return (
        <TabMenContainer>
            {TabMenus.map((tabmenu, i) => (
                <TabMenContent key={i}>
                    <p>{tabmenu}</p>
                </TabMenContent>
            ))}
        </TabMenContainer>
    );
};

const TabMenContainer = styled.div`
    width: 100%;
    height: 42px;
    border-bottom: 1px solid ${(props) => props.theme.colors.black};
`;
const TabMenContent = styled.div`
    width: 175px;
    height: 42px;
    margin-left: 39px;
    background: #283c43;
    border: 1px solid #000000;
    border-radius: 0px 40px 0px 0px;
    p {
        margin-left: 31px;
        margin-top: 6px;
        font-weight: 700;
        font-size: 24px;
        color: ${(props) => props.theme.colors.white};
    }
`;

export default TabMenu;
