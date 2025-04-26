import LottieHandler from "@components/feedback/LottieHandler/LottieHandler";
import {Row, Col } from "react-bootstrap";

type GridListProps<T>={
    records:T[]
    renderItem:(record:T)=>React.ReactNode
    emptyMessage:string
}
// type hasId={id:Number}

const GridList=<T extends {id?:number} >({records,renderItem,emptyMessage}:GridListProps<T>) =>{
    const categoriesList =
records.length > 0
  ? records.map((record) => (
      <Col
        xs={3}
        key={record.id}
        className="d-flex justify-content-center mb-5 mt-2"
      >
        {renderItem(record)}
      </Col>
    ))
  : <LottieHandler type="ShoppingEmpty" message={emptyMessage}/>;
  return (
    <Row>{categoriesList}</Row>
  )
}

export default GridList