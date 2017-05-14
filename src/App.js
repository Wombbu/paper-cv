import React, { Component } from 'react';
import styled from 'styled-components';
import Paper, { PaperTitle, PaperParagraph } from './Components/Paper';

const paperPositions = [
  { xMultiplier: 0.3,
    yMultiplier: 0.9,
    rotation: 24,
    readRotation: -2,
    animationLength: 0.6,
    transitionDelay: 0.2,
  },
  { xMultiplier: -0.3,
    yMultiplier: 0.74,
    rotation: -20,
    readRotation: 2,
    animationLength: 0.4,
    transitionDelay: 0,
  },
  { xMultiplier: 0,
    yMultiplier: 0.84,
    rotation: -42,
    readRotation: -1,
    animationLength: 0.3,
    transitionDelay: 0.1,
  },
  { xMultiplier: 0.7,
    yMultiplier: 0.2,
    rotation: -40,
    readRotation: 3,
    animationLength: 0.2,
    transitionDelay: 0.4,
  },
  { xMultiplier: -0.73,
    yMultiplier: 0.2,
    rotation: 46,
    readRotation: 1,
    animationLength: 0.3,
    transitionDelay: 0.8,
  },
]

const AppWrapper = styled.div`
  flex: 1;
  background-color: #f2f2f2;
  margin: 0px;
  display: flex;
  justify-content: center;
  overflow: hidden;
`

class App extends Component {

  constructor() {
    super();
    this.state = {
      focusIndex: 0,
      height: 200,
      width: 200,
    }
    this.container = null;
  }

  updateDimensions() {
    this.setState({
      width: this.container.clientWidth,
      height: this.container.clientHeight
    });
  }

  componentDidMount() {
    window.addEventListener("resize", () => this.updateDimensions());
    setTimeout(() => {
      this.updateDimensions();
    }, 200)

  }

  render() {
    return (
      <AppWrapper
        innerRef={ref => {
          if (!this.container) {
            this.container = ref;
          }
        }}>
        {
          paperPositions.map((pos, index) =>
            <Paper
              height={this.state.height * 0.7}
              scatterX={this.state.width * pos.xMultiplier}
              scatterY={this.state.height * pos.yMultiplier}
              scatterRotation={pos.rotation}
              readRotation={pos.readRotation}
              animationLength={pos.animationLength}
              transitionDelay={pos.transitionDelay}
              isReaded={this.state.focusIndex === index}
              onClick={() => this.setState({focusIndex: index})}
            >
              <PaperTitle
                fontFamily="Reenie Beanie"
              >
              CV of Lauri Nevanperä
              </PaperTitle>
              <PaperParagraph>
                Hi! Im Lauri. <br />
                You might find some interesting information from these papers.
                öääööäöääöfdsafsa juuuuuuh
                fdsafsd fdsafd  fdas fdsa f dfsaf dasfda
              </PaperParagraph>
            </Paper>
          )
        }



      </AppWrapper>
    );
  }
}

export default App;
