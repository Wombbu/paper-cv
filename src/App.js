import React, { Component } from 'react';
import styled from 'styled-components';
import Paper, { PaperTitle, PaperParagraph } from './Components/Paper';

const AppWrapper = styled.div`
  flex: 1;
  background-color: #f2f2f2;
  margin: 0px;
  display: flex;
  justify-content: center;
`

class App extends Component {

  constructor() {
    super();
    this.state = {
      isReaded: false,
      height: 200,
      width: 200,
    }
    this.container = null;
  }

  updateDimensions() {
    console.log('update dimensions. container:', this.container.clientHeight)
    this.setState({
      width: this.container.clientWidth,
      height: this.container.clientHeight
    });
  }

  componentDidMount() {
    window.addEventListener("resize", () => this.updateDimensions());
    setTimeout(() => {
      this.updateDimensions();
    }, 1500)

  }

  render() {
    return (
      <AppWrapper
        innerRef={ref => {
          if (!this.container) {
            this.container = ref;
          }
        }}>
        <Paper
          height={this.state.height - 100}
          scatterX={-this.state.width / 2}
          scatterY={this.state.height / 2}
          scatterRotation={24}
          isReaded={this.state.isReaded}
          onClick={() => this.setState({isReaded: !this.state.isReaded})}
        >
          <PaperTitle
            fontFamily="Reenie Beanie"
          >
          CV of Lauri Nevanperä
          </PaperTitle>
          <PaperParagraph>
            Hi! Im Lauri Nevanperä! <br />
            You might find some interesting information from these papers.
          </PaperParagraph>
        </Paper>
        <Paper
          height={this.state.height - 100}
          scatterX={this.state.width * 0.4}
          scatterY={this.state.height * 0.8}
          scatterRotation={-30}
          isReaded={this.state.isReaded}
          onClick={() => this.setState({isReaded: !this.state.isReaded})}
        >
          <PaperTitle
            fontFamily="Reenie Beanie"
          >
          CV of Lauri Nevanperä
          </PaperTitle>
          <PaperParagraph>
            Hi! Im Lauri Nevanperä! <br />
            You might find some interesting information from these papers.
          </PaperParagraph>
        </Paper>
        <Paper
          height={this.state.height - 100}
          scatterX={-this.state.width * 0.4}
          scatterY={-this.state.height * 0.7}
          scatterRotation={-40}
          isReaded={this.state.isReaded}
          onClick={() => this.setState({isReaded: !this.state.isReaded})}
        >
          <PaperTitle
            fontFamily="Reenie Beanie"
          >
          CV of Lauri Nevanperä
          </PaperTitle>
          <PaperParagraph>
            Hi! Im Lauri Nevanperä! <br />
            You might find some interesting information from these papers.
          </PaperParagraph>
        </Paper>
        <Paper
          height={this.state.height - 100}
          scatterX={this.state.width * 0.4}
          scatterY={-this.state.height * 0.3}
          scatterRotation={60}
          isReaded={this.state.isReaded}
          onClick={() => this.setState({isReaded: !this.state.isReaded})}
        >
          <PaperTitle
            fontFamily="Reenie Beanie"
          >
          CV of Lauri Nevanperä
          </PaperTitle>
          <PaperParagraph>
            Hi! Im Lauri Nevanperä! <br />
            You might find some interesting information from these papers.
          </PaperParagraph>
        </Paper>
      </AppWrapper>
    );
  }
}

export default App;
