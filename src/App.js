import Main from './components/main'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Particles from "react-tsparticles";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Quicksand',
    ].join(','),
  },});

function App() {
  return (
    <div className="App">
    <Particles
      id="tsparticles"
        options={{
          "background": {
            "color": {
              "value": "#000000"
            },
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover"
          },
          "fullScreen": {
            "enable": true,
            "zIndex": -1
          },
          "interactivity": {
            "events": {
              "onClick": {
                "enable": true,
                "mode": "push"
              },
              "onHover": {
                "enable": true,
                "mode": "grab",
                "parallax": {
                  "enable": true,
                  "force": 60
                }
              }
            },
            "modes": {
              "bubble": {
                "distance": 400,
                "duration": 2,
                "opacity": 0.8,
                "size": 40
              },
              "grab": {
                "distance": 400
              }
            }
          },
          "particles": {
            "color": {
              "value": "#ffffff"
            },
            "links": {
              "color": {
                "value": "#ffffff"
              },
              "distance": 150,
              "enable": true,
              "opacity": 0.4
            },
            "move": {
              "attract": {
                "rotate": {
                  "x": 600,
                  "y": 1200
                }
              },
              "enable": true,
              "outModes": {
                "bottom": "out",
                "left": "out",
                "right": "out",
                "top": "out"
              }
            },
            "number": {
              "density": {
                "enable": true
              }
            },
            "opacity": {
              "random": {
                "enable": true
              },
              "value": 0.5,
              "animation": {
                "enable": true,
                "minimumValue": 0.1,
                "speed": 3
              }
            },
            "size": {
              "random": {
                "enable": true
              },
              "value": 10,
              "animation": {
                "enable": true,
                "minimumValue": 0.1,
                "speed": 20
              }
            }
          }
        }}
      />
    <ThemeProvider theme={theme}>
      <Main/>
    </ThemeProvider>
    </div>
  );
}

export default App;
