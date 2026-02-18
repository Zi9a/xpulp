let color = {
  textColor: 'yellow',
  shadowColor: 'black',
  backgroundColor: 'crimson',

  changeBackgroundColor: function(color) {
    switch (color) {
      case 'darkblue':
        this.backgroundColor = 'darkblue';
        break;

      case 'black':
        this.backgroundColor = 'black';
        break;

      case 'darkgreen':
        this.backgroundColor = 'darkgreen';
        break;

      case 'purple':
        this.backgroundColor = 'purple';
        break;

      case 'brown':
        this.backgroundColor = 'brown';
        break;

      case 'darkcyan':
        this.backgroundColor = 'darkcyan';
        break;

      case 'darkslategray':
        this.backgroundColor = 'darkslategray';
        break;

      default:
        this.backgroundColor = 'crimson';
        break;
    }
  }
}

// little tests
async function foo() {
  let colors = [
    'darkcyan',
    'darkblue',
    'black',
    'darkgreen',
    'brown',
    'crimson',
    'darkslategray',
    'purple',
  ]

  setInterval(() => {
    colors.forEach(element => {
      document.body.style.backgroundColor = element;
    }, 5000);
  });
}
foo()
