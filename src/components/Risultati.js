import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import results from './../constants/results';

class Risultati extends Component {
    constructor(props) {
        super(props);
        this.state = { results: results }
    }
    render() { 
        return ( 
            <div className="risultati">
                

           <Container>
                <Row>
                    <Col>
                        <h1 className="main-title">Ecco cosa ti aiuterà 
a svolgere meglio 
il tuo lavoro!</h1>
                    </Col>
                </Row>
               </Container> 

               <Container>
                <Row>
                    <Col md="12">
                        <div className="space">
                        <div className="card">
                        <h1 className="card__main-title">Il decespugliatore: per cespugli, rovi, punti difficili da raggiungere</h1>
                        <div className="card__box-img">
                        </div>
                        <div className="card__box-text">
                        <p>
                        Il decespugliatore è una macchina che si presta per tagliare cespugli, falciare i rovi e tagliare le sterpaglie e l'erba alta in punti difficili da raggiungere, ad esempio lungo i fossi o a ridosso di muri, cordoli, tronchi di piante. Ci sono due sistemi di taglio: con due fili di nylon o con disco di taglio. Alcuni modelli permettono di scegliere il sistema di taglio più adatto di volta in volta in base al lavoro da svolgere.
                        </p>
                        <p>
                        Il decespugliatore può essere elettrico, a batteria e a scoppio, a benzina o a miscela. Il suo motore si trova sul retro di un manico su cui sono poste due maniglie o un doppio manubrio.
                        </p>

                        </div>
                    </div>
                    <a className="card__btn" href="#">ECCO COSA ABBIAMO SCELTO PER TE</a>

                        </div>
                    </Col>
                     
                </Row>
               </Container> 
            </div>
         );
    }
}
 
export default Risultati;