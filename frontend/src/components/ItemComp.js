import { Card, Button } from 'react-bootstrap'
import '../App.css'
const ItemComp = ({ itemTitle, itemDesc, itemImg, itemStock }) => {
    return (
        <div >

            <Card
                className="justify-content-md-center"
                style={{ width: 260, marginBottom: 20 }}>

                <Card.Img
                    className="imageStyle"
                    src={itemImg}></Card.Img>

                <Card.Body style={cardBodyStyle}>

                    <Card.Title style={titleStyle}>{itemTitle}</Card.Title>

                    <hr style={hrStyle} />

                    <Card.Text style={descStyle} className="text-muted">
                        {itemDesc}
                    </Card.Text>

                    <Card.Text style={descStyle} className="text-muted">
                        <label style={itemStock <= 0 ? { color: 'salmon' } : {}}>
                            In Stock: {itemStock}
                        </label>
                    </Card.Text>

                    <Button
                        variant={itemStock > 0 ? "outline-primary" : 'outline-secondary'}
                        disabled={itemStock <= 0 ? true : false}
                        style={buyButtonStyle}>Buy</Button>

                </Card.Body>

            </Card>
        </div >
    )
}

const titleStyle = {
    marginBottom: 1
}

const descStyle = {
    fontSize: 15,
    paddingLeft: 3,
    marginBottom: 0
}

const buyButtonStyle = {
    fontSize: 15,
    marginTop: 10,
    paddingTop: 3,
    paddingBotton: 3,
    marginBottom: 6
}

const hrStyle = {
    marginTop: 6,
    marginBottom: 8
}

const cardBodyStyle = {
    paddingLeft: 13,
    paddingTop: 10,
    paddingBottom: 10
}

export default ItemComp