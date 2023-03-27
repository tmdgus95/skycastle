import GradeRegist from "./GradeRegist";
import TabMenu from "../../components/TabMenu";

const GradeList = () => {
  // const [write, setWrite] = useState(false);
  // const onSearch = (value: string) => console.log(value);
  // const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  // const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
  //   console.log("selectedRowKeys changed: ", newSelectedRowKeys);
  //   setSelectedRowKeys(newSelectedRowKeys);
  // };

  // const rowSelection = {
  //   selectedRowKeys,
  //   onChange: onSelectChange,
  // };

  // const handleWriteChange = () => {
  //   setWrite(!write);
  // };

  // const defaultMonth = moment(new Date()).format("YYYY/MM");
  return (
    <>
      <TabMenu menu={"성적 입력"} />
      {/* {write ? ( */}
      <GradeRegist />
      {/* ) : (
        <>
          <GradeRegistListContainer>
            <DatePicker
              defaultValue={dayjs(defaultMonth, "YYYY/MM")}
              picker="month"
              format={"YYYY년 MM월"}
              bordered={false}
              allowClear={false}
            />
            <Table
              className="t-grade"
              // rowSelection={rowSelection}
              columns={columns}
              dataSource={data}
              footer={() => (
                <div className="flex justify-between">
                  <Search placeholder="이름을 입력하세요" onSearch={onSearch} />
                  <button className="grade-bt" onClick={handleWriteChange}>
                    등록
                  </button>
                </div>
              )}
              pagination={{
                position: ["bottomCenter"],
                showSizeChanger: false,
              }}
            />
          </GradeRegistListContainer>
        </>
      )} */}
    </>
  );
};

export default GradeList;
