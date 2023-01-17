import Card from "@/components/Card";
import TableComponent from "@/components/Table";
import ChartComponent from "@/components/Chart";

export default function Home({props}) {
  return (
    <div style={{display: "flex", flexDirection: "column", height: '100%'}}>
    <div style={{display:"flex", flex:1, justifyContent:"space-between"}}>
      <div style={{flex:1}}>
        <div style={{display: "flex", flexDirection: "column"}}>
          <Card style={{flex: 1}} /> 
          <Card style={{flex: 1}} /> 
        </div>
      </div>
      <ChartComponent style={{flex:2}} />
    </div>
    <TableComponent style={{flex: 1}} />
  </div>
  );
};

