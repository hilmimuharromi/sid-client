import {Table} from 'antd'


export default function TableMeasurement({data}) {
    const columns = [
       {
        title: "Name",
        dataIndex: 'name',
        key: "name"
       },
       {
        title: "Value",
        dataIndex: 'value',
        key: "value"
       }
    ]
    // const data = [{"name":"FIT","value":"loose"},{"name":"SIZE","value":"M"},{"name":"BODY LENGTH","url":"https://www.youtube.com/embed/nhBT0_kNj6o","value":"100"}]
    return(
        <>
        <Table columns={columns} dataSource={data} pagination={false} />
        {/* {JSON.stringify(data)} */}
        </>
    )
}