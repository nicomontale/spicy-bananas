import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import StepWizard from "react-step-wizard";

import steps from "./../constants/steps";
import results from "./../constants/results";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Risultati from "./Risultati";

class Questionario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      checkId: [],
      ids: [],

      titleStep: steps,
      attivita: steps[0].answers,
      ostacoli: steps[1].answers,
      pendenza: steps[2].answers,
      dimensione: steps[3].answers,

      risultati: results
    };
  }
  showNav = () => {
    const { step, checkId } = this.state;
    if (step == 1) {
      return (
        <div>
          <li
            className="navigation__step navigation__step--active"
            onClick={() => {
              if (checkId[0]) {
                this.setState({ step: 1 });
              }
            }}
          >
            <a href="#">Attività</a>
          </li>
          <li
            className="navigation__step"
            onClick={() => {
              if (checkId[1]) {
                this.setState({ step: 2 });
              }
            }}
          >
            <a href="#">Ostacoli</a>
          </li>
          <li
            className="navigation__step"
            onClick={() => {
              if (checkId[2]) {
                this.setState({ step: 3 });
              }
            }}
          >
            <a href="#">Pendenza</a>
          </li>
          <li
            className="navigation__step"
            onClick={() => {
              if (checkId[3]) {
                this.setState({ step: 4 });
              }
            }}
          >
            <a href="#">Dimensione</a>
          </li>
        </div>
      );
    } else if (step == 2) {
      return (
        <div>
          <li
            className="navigation__step navigation__step--active"
            onClick={() => {
              if (checkId[0]) {
                this.setState({ step: 1 });
              }
            }}
          >
            <a href="#">Attività</a>
          </li>
          <li
            className="navigation__step navigation__step--active"
            onClick={() => {
              if (checkId[1]) {
                this.setState({ step: 2 });
              }
            }}
          >
            <a href="#">Ostacoli</a>
          </li>
          <li
            className="navigation__step"
            onClick={() => {
              if (checkId[2]) {
                this.setState({ step: 3 });
              }
            }}
          >
            <a href="#">Pendenza</a>
          </li>
          <li
            className="navigation__step"
            onClick={() => {
              if (checkId[3]) {
                this.setState({ step: 4 });
              }
            }}
          >
            <a href="#">Dimensione</a>
          </li>
        </div>
      );
    } else if (step == 3) {
      return (
        <div>
          <li
            className="navigation__step navigation__step--active"
            onClick={() => {
              if (checkId[0]) {
                this.setState({ step: 1 });
              }
            }}
          >
            <a href="#">Attività</a>
          </li>
          <li
            className="navigation__step navigation__step--active"
            onClick={() => {
              if (checkId[1]) {
                this.setState({ step: 2 });
              }
            }}
          >
            <a href="#">Ostacoli</a>
          </li>
          <li
            className="navigation__step navigation__step--active"
            onClick={() => {
              if (checkId[2]) {
                this.setState({ step: 3 });
              }
            }}
          >
            <a href="#">Pendenza</a>
          </li>
          <li
            className="navigation__step"
            onClick={() => {
              if (checkId[3]) {
                this.setState({ step: 4 });
              }
            }}
          >
            <a href="#">Dimensione</a>
          </li>
        </div>
      );
    } else if (step == 4) {
      return (
        <div>
          <li
            className="navigation__step navigation__step--active"
            onClick={() => {
              if (checkId[0]) {
                this.setState({ step: 1 });
              }
            }}
          >
            <a href="#">Attività</a>
          </li>
          <li
            className="navigation__step navigation__step--active"
            onClick={() => {
              if (checkId[1]) {
                this.setState({ step: 2 });
              }
            }}
          >
            <a href="#">Ostacoli</a>
          </li>
          <li
            className="navigation__step navigation__step--active"
            onClick={() => {
              if (checkId[2]) {
                this.setState({ step: 3 });
              }
            }}
          >
            <a href="#">Pendenza</a>
          </li>
          <li
            className="navigation__step navigation__step--active"
            onClick={() => {
              if (checkId[3]) {
                this.setState({ step: 4 });
              }
            }}
          >
            <a href="#">Dimensione</a>
          </li>
        </div>
      );
    } else if (step == 3) {
      return (
        <div>
          <li
            className="navigation__step navigation__step--active"
            onClick={() => {
              if (checkId[step - 1]) {
                this.setState({ step: 1 });
              }
            }}
          >
            <a href="#">Attività</a>
          </li>
          <li
            className="navigation__step navigation__step--active"
            onClick={() => {
              if (checkId[step - 1]) {
                this.setState({ step: 2 });
              }
            }}
          >
            <a href="#">Ostacoli</a>
          </li>
          <li
            className="navigation__step navigation__step--active"
            onClick={() => {
              if (checkId[step - 1]) {
                this.setState({ step: 3 });
              }
            }}
          >
            <a href="#">Pendenza</a>
          </li>
          <li
            className="navigation__step"
            onClick={() => {
              if (checkId[step - 1]) {
                this.setState({ step: 4 });
              }
            }}
          >
            <a href="#">Dimensione</a>
          </li>
        </div>
      );
    } else if (step == 5) {
      return (
        <div>
          <li
            className="navigation__step navigation__step--active"
            onClick={() => {
              if (checkId[step - 1]) {
                this.setState({ step: 1 });
              }
            }}
          >
            <a href="#">Attività</a>
          </li>
          <li
            className="navigation__step navigation__step--active"
            onClick={() => {
              if (checkId[step - 1]) {
                this.setState({ step: 2 });
              }
            }}
          >
            <a href="#">Ostacoli</a>
          </li>
          <li
            className="navigation__step navigation__step--active"
            onClick={() => {
              if (checkId[step - 1]) {
                this.setState({ step: 3 });
              }
            }}
          >
            <a href="#">Pendenza</a>
          </li>
          <li
            className="navigation__step navigation__step--active"
            onClick={() => {
              if (checkId[step - 1]) {
                this.setState({ step: 4 });
              }
            }}
          >
            <a href="#">Dimensione</a>
          </li>
        </div>
      );
    }
  };

  showStep = () => {
    const {
      step,
      attivita,
      ostacoli,
      pendenza,
      dimensione,
      checkId,
      risultati
    } = this.state;

    if (step === 1) {
      return attivita.map(element => {
        return (
          <div>
            <Step1
              id={element.id}
              title={element.title}
              description={element.description}
              img={require(`./../assets/img/${element.image}`)}
              onclick={this.click}
              filterClass="filter"
            ></Step1>
          </div>
        );
      });
    }

    if (step === 2) {
      return ostacoli.map(element => {
        return (
          <Step2
            id={element.id}
            title={element.title}
            description={element.description}
            img={require(`./../assets/img/${element.image}`)}
            onclick={this.click}
          ></Step2>
        );
      });
    }
    if (step === 3) {
      return pendenza.map(element => {
        return (
          <Step3
            id={element.id}
            title={element.title}
            description={element.description}
            img={require(`./../assets/img/${element.image}`)}
            onclick={this.click}
          ></Step3>
        );
      });
    }
    if (step === 4) {
      return dimensione.map(element => {
        return (
          <Step4
            id={element.id}
            title={element.title}
            onclick={this.click}
          ></Step4>
        );
      });
    }
    if (step === 5) {
      if (checkId[0] == 100 && checkId[1] == 104 && checkId[2] == 105) {
        if (checkId[3] == 107) {
          return (
            <div>
              <Risultati
                title={risultati[8].title}
                description={risultati[8].description}
                url={risultati[8].url}
              ></Risultati>
            </div>
          );
        } else if (checkId[3] == 108) {
          return (
            <div>
              <Risultati
                title={risultati[8].title}
                description={risultati[8].description}
                url={risultati[8].url}
              ></Risultati>
            </div>
          );
        } else if (checkId[3] == 109) {
          return (
            <div>
              <Risultati
                title={risultati[9].title}
                description={risultati[9].description}
                url={risultati[9].url}
              ></Risultati>
            </div>
          );
        } else if (checkId[3] == 110) {
          return (
            <div>
              <Risultati
                title={risultati[10].title}
                description={risultati[10].description}
                url={risultati[10].url}
              ></Risultati>
            </div>
          );
        }
      } else if (checkId[0] == 100 && checkId[1] == 104 && checkId[2] == 106) {
        if (checkId[3] == 107) {
          return (
            <div>
              <Risultati
                title={risultati[1].title}
                description={risultati[1].description}
                url={risultati[1].url}
              ></Risultati>
            </div>
          );
        } else if (checkId[3] == 108) {
          return (
            <div>
              <Risultati
                title={risultati[2].title}
                description={risultati[2].description}
                url={risultati[2].url}
              ></Risultati>
            </div>
          );
        } else if (checkId[3] == 109) {
          return (
            <div>
              <Risultati
                title={risultati[2].title}
                description={risultati[2].description}
                url={risultati[2].url}
              ></Risultati>
            </div>
          );
        } else if (checkId[3] == 110) {
          return (
            <div>
              <Risultati
                title={risultati[3].title}
                description={risultati[3].description}
                url={risultati[3].url}
              ></Risultati>
              <Risultati
                title={risultati[2].title}
                description={risultati[2].description}
                url={risultati[2].url}
              ></Risultati>
            </div>
          );
        }
      } else if (checkId[0] == 100 && checkId[1] == 102 && checkId[2] == 105) {
        if (checkId[3] == 107) {
          return (
            <div>
              <Risultati
                title={risultati[6].title}
                description={risultati[6].description}
                url={risultati[6].url}
              ></Risultati>
            </div>
          );
        } else if (checkId[3] == 108) {
          return (
            <div>
              <Risultati
                title={risultati[6].title}
                description={risultati[6].description}
                url={risultati[6].url}
              ></Risultati>
            </div>
          );
        } else if (checkId[3] == 109) {
          return (
            <div>
              <Risultati
                title={risultati[7].title}
                description={risultati[7].description}
                url={risultati[7].url}
              ></Risultati>
            </div>
          );
        } else if (checkId[3] == 110) {
          return (
            <div>
              <Risultati
                title={risultati[7].title}
                description={risultati[7].description}
                url={risultati[7].url}
              ></Risultati>
            </div>
          );
        }
      } else if (checkId[0] == 100 && checkId[1] == 102 && checkId[2] == 106) {
        if (checkId[3] == 107) {
          return (
            <div>
              <Risultati
                title={risultati[4].title}
                description={risultati[4].description}
                url={risultati[4].url}
              ></Risultati>
            </div>
          );
        } else if (checkId[3] == 108) {
          return (
            <div>
              <Risultati
                title={risultati[4].title}
                description={risultati[4].description}
                url={risultati[4].url}
              ></Risultati>
            </div>
          );
        } else if (checkId[3] == 109) {
          return (
            <div>
              <Risultati
                title={risultati[5].title}
                description={risultati[5].description}
                url={risultati[5].url}
              ></Risultati>
            </div>
          );
        } else if (checkId[3] == 110) {
          return (
            <div>
              <Risultati
                title={risultati[3].title}
                description={risultati[3].description}
                url={risultati[3].url}
              ></Risultati>
              <Risultati
                title={risultati[5].title}
                description={risultati[5].description}
                url={risultati[5].url}
              ></Risultati>
            </div>
          );
        }
      } else if (checkId[0] == 100 && checkId[1] == 103 && checkId[2] == 105) {
        if (checkId[3] == 107) {
          return (
            <div>
              <Risultati
                title={risultati[6].title}
                description={risultati[6].description}
                url={risultati[6].url}
              ></Risultati>
            </div>
          );
        } else if (checkId[3] == 108) {
          return (
            <div>
              <Risultati
                title={risultati[6].title}
                description={risultati[6].description}
                url={risultati[6].url}
              ></Risultati>
            </div>
          );
        } else if (checkId[3] == 109) {
          return (
            <div>
              <Risultati
                title={risultati[7].title}
                description={risultati[7].description}
                url={risultati[7].url}
              ></Risultati>
            </div>
          );
        } else if (checkId[3] == 110) {
          return (
            <div>
              <Risultati
                title={risultati[7].title}
                description={risultati[7].description}
                url={risultati[7].url}
              ></Risultati>
            </div>
          );
        }
      } else if (checkId[0] == 100 && checkId[1] == 106 && checkId[2] == 106) {
        if (checkId == 107) {
          return (
            <div>
              <Risultati
                title={risultati[4].title}
                description={risultati[4].description}
                url={risultati[4].url}
              ></Risultati>
            </div>
          );
        } else if (checkId[3] == 108) {
          return (
            <div>
              <Risultati
                title={risultati[4].title}
                description={risultati[4].description}
                url={risultati[4].url}
              ></Risultati>
            </div>
          );
        } else if (checkId[3] == 109) {
          return (
            <div>
              <Risultati
                title={risultati[5].title}
                description={risultati[5].description}
                url={risultati[5].url}
              ></Risultati>
            </div>
          );
        } else if (checkId[3] == 110) {
          return (
            <div>
              <Risultati
                title={risultati[3].title}
                description={risultati[3].description}
                url={risultati[3].url}
              ></Risultati>
              <Risultati
                title={risultati[5].title}
                description={risultati[5].description}
                url={risultati[5].url}
              ></Risultati>
            </div>
          );
        }
      } else if (checkId[0] == 101 && checkId[1] == 104 && checkId[2] == 105) {
        if (checkId[3] == 107) {
          return (
            <div>
              <Risultati
                title={risultati[14].title}
                description={risultati[14].description}
                url={risultati[14].url}
              ></Risultati>
            </div>
          );
        } else if (checkId[3] == 108) {
          return (
            <div>
              <Risultati
                title={risultati[14].title}
                description={risultati[14].description}
                url={risultati[14].url}
              ></Risultati>
            </div>
          );
        } else if (checkId[3] == 109) {
          return (
            <div>
              <Risultati
                title={risultati[11].title}
                description={risultati[11].description}
                url={risultati[11].url}
              ></Risultati>
            </div>
          );
        } else if (checkId[3] == 110) {
          return (
            <div>
              <Risultati
                title={risultati[11].title}
                description={risultati[11].description}
                url={risultati[11].url}
              ></Risultati>
            </div>
          );
        }
      } else if (checkId[0] == 101 && checkId[1] == 104 && checkId[2] == 106) {
        if (checkId[3] == 107) {
          return (
            <div>
              <Risultati
                title={risultati[14].title}
                description={risultati[14].description}
                url={risultati[14].url}
              ></Risultati>
            </div>
          );
        } else if (checkId[3] == 108) {
          return (
            <div>
              <Risultati
                title={risultati[14].title}
                description={risultati[14].description}
                url={risultati[14].url}
              ></Risultati>
            </div>
          );
        } else if (checkId[3] == 109) {
          return (
            <div>
              <Risultati
                title={risultati[11].title}
                description={risultati[11].description}
                url={risultati[11].url}
              ></Risultati>
            </div>
          );
        } else if (checkId[3] == 110) {
          return (
            <div>
              <Risultati
                title={risultati[11].title}
                description={risultati[11].description}
                url={risultati[11].url}
              ></Risultati>
            </div>
          );
        }
      } else if (checkId[0] == 101 && checkId[1] == 102 && checkId[2] == 105) {
        if (checkId[3] == 107) {
          return (
            <div>
              <Risultati
                title={risultati[12].title}
                description={risultati[12].description}
                url={risultati[12].url}
              ></Risultati>
              <Risultati
                title={risultati[14].title}
                description={risultati[14].description}
                url={risultati[14].url}
              ></Risultati>
            </div>
          );
        } else if (checkId[3] == 108) {
          return (
            <div>
              <Risultati
                title={risultati[12].title}
                description={risultati[12].description}
                url={risultati[12].url}
              ></Risultati>
              <Risultati
                title={risultati[14].title}
                description={risultati[14].description}
                url={risultati[14].url}
              ></Risultati>
            </div>
          );
        } else if (checkId[3] == 109) {
          return (
            <div>
              <Risultati
                title={risultati[13].title}
                description={risultati[13].description}
                url={risultati[13].url}
              ></Risultati>
            </div>
          );
        } else if (checkId[3] == 110) {
          return (
            <div>
              <Risultati
                title={risultati[13].title}
                description={risultati[13].description}
                url={risultati[13].url}
              ></Risultati>
            </div>
          );
        }
      } else if (checkId[0] == 101 && checkId[1] == 102 && checkId[2] == 106) {
        if (checkId[3] == 107) {
          return (
            <div>
              <Risultati
                title={risultati[12].title}
                description={risultati[12].description}
                url={risultati[12].url}
              ></Risultati>
              <Risultati
                title={risultati[14].title}
                description={risultati[14].description}
                url={risultati[14].url}
              ></Risultati>
            </div>
          );
        } else if (checkId[3] == 108) {
          return (
            <div>
              <Risultati
                title={risultati[12].title}
                description={risultati[12].description}
                url={risultati[12].url}
              ></Risultati>
              <Risultati
                title={risultati[14].title}
                description={risultati[14].description}
                url={risultati[14].url}
              ></Risultati>
            </div>
          );
        } else if (checkId[3] == 109) {
          return (
            <div>
              <Risultati
                title={risultati[15].title}
                description={risultati[15].description}
                url={risultati[15].url}
              ></Risultati>
            </div>
          );
        } else if (checkId[3] == 110) {
          return (
            <div>
              <Risultati
                title={risultati[15].title}
                description={risultati[15].description}
                url={risultati[15].url}
              ></Risultati>
            </div>
          );
        }
      } else if (checkId[0] == 101 && checkId[1] == 103 && checkId[2] == 105) {
        if (checkId[3] == 107) {
          return (
            <div>
              <Risultati
                title={risultati[12].title}
                description={risultati[12].description}
                url={risultati[12].url}
              ></Risultati>
              <Risultati
                title={risultati[14].title}
                description={risultati[14].description}
                url={risultati[14].url}
              ></Risultati>
            </div>
          );
        } else if (checkId[3] == 108) {
          return (
            <div>
              <Risultati
                title={risultati[12].title}
                description={risultati[12].description}
                url={risultati[12].url}
              ></Risultati>
              <Risultati
                title={risultati[14].title}
                description={risultati[14].description}
                url={risultati[14].url}
              ></Risultati>
            </div>
          );
        } else if (checkId[3] == 109) {
          return (
            <div>
              <Risultati
                title={risultati[13].title}
                description={risultati[13].description}
                url={risultati[13].url}
              ></Risultati>
            </div>
          );
        } else if (checkId[3] == 110) {
          return (
            <div>
              <Risultati
                title={risultati[13].title}
                description={risultati[13].description}
                url={risultati[13].url}
              ></Risultati>
            </div>
          );
        }
      } else if (checkId[0] == 101 && checkId[1] == 102 && checkId[2] == 106) {
        if (checkId[3] == 107) {
          return (
            <div>
              <Risultati
                title={risultati[12].title}
                description={risultati[12].description}
                url={risultati[12].url}
              ></Risultati>
              <Risultati
                title={risultati[14].title}
                description={risultati[14].description}
                url={risultati[14].url}
              ></Risultati>
            </div>
          );
        } else if (checkId[3] == 108) {
          return (
            <div>
              <Risultati
                title={risultati[12].title}
                description={risultati[12].description}
                url={risultati[12].url}
              ></Risultati>
              <Risultati
                title={risultati[14].title}
                description={risultati[14].description}
                url={risultati[14].url}
              ></Risultati>
            </div>
          );
        } else if (checkId[3] == 109) {
          return (
            <div>
              <Risultati
                title={risultati[13].title}
                description={risultati[13].description}
                url={risultati[13].url}
              ></Risultati>
            </div>
          );
        } else if (checkId[3] == 110) {
          return (
            <div>
              <Risultati
                title={risultati[13].title}
                description={risultati[13].description}
                url={risultati[13].url}
              ></Risultati>
            </div>
          );
        }
      }
    }
  };
  //Click e controllo
  click = e => {
    e.preventDefault();
    const { step, ids } = this.state;

    if (step === 1) {
      ids[step - 1] = e.target.id;
      this.setState({
        checkId: [...ids]
      });
      const parent = e.target.parentNode.childNodes;
      parent.forEach(element => {
        if (element === "filter--active") {
          element.classList.remove("filter--active");
        } else {
          element.classList.add("filter--active");
        }
      });
    }
    if (step === 2) {
      ids[step - 1] = e.target.id;
      this.setState({
        checkId: [...ids]
      });
    }
    if (step === 3) {
      ids[step - 1] = e.target.id;
      this.setState({
        checkId: [...ids]
      });
    }
    if (step === 4) {
      ids[step - 1] = e.target.id;
      this.setState({
        checkId: [...ids]
      });
      const arr = e.target.parentNode.parentNode;
      for (let i = 0; i < arr.children.length; i++) {
        arr.children[i].classList.remove("step-4__content--active");
      }
      e.target.parentNode.classList.add("step-4__content--active");
    }
  };

  nextStep = e => {
    const { step, checkId } = this.state;

    if (checkId[step - 1]) {
      this.setState({
        step: step + 1
      });
    }
  };
  prevStep = () => {
    const { step } = this.state;

    this.setState({
      step: step - 1
    });
  };
  showTitle = () => {
    const { step, titleStep } = this.state;

    const arr = titleStep.map(element => (
      <h1 className="main-title">{element.question}</h1>
    ));

    if (step == 1) {
      return arr[step - 1];
    }
    if (step == 2) {
      return arr[step - 1];
    }
    if (step == 3) {
      return arr[step - 1];
    }
    if (step == 4) {
      return arr[step - 1];
    }
  };
  componentDidUpdate() {
    this.showNav();
  }

  render() {
    const { step, checkId, titleStep } = this.state;

    console.log(checkId);
    return (
      <div className="App-container">
        <Container className="risultati-section">
          <Row>
            <ul>{this.showNav()}</ul>
          </Row>
        </Container>

        {this.showTitle()}
        {step === 5 ? (
          <Container>
            <Row>
              <Col>
                <h1 className="main-title">
                  Ecco cosa ti aiuterà a svolgere meglio il tuo lavoro!
                </h1>
              </Col>
            </Row>
          </Container>
        ) : null}
        {step === 4 ? (
          <div className="step-4__container">{this.showStep()}</div>
        ) : (
          <div className="step-cards-container">{this.showStep()}</div>
        )}

        {step < 5 ? (
          <div
            id="button"
            className={checkId[step - 1] ? "button" : "button disabled"}
            onClick={this.nextStep}
          >
            <span>CONTINUA</span>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Questionario;
