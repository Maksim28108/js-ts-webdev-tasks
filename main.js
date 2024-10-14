function Heading(tag = "h1", content) {
  const container = document.createElement('div');
  container.setAttribute('class', 'heading-container');

  const node = document.createElement(tag);
  node.textContent = content;

  const button = document.createElement('button')
  button.textContent = 'Explore Showcase'
  button.setAttribute('class', 'heading-button')

  container.append(node)
  container.append(button)

  return container;
}


function button(props){
  const button = document.createElement('button');
  button.textContent = props.text
  button.style.color = props.color 
  button.style.backgroundColor = props.backgroundColor
  button.setAttribute('class', 'button')
  return button
}

function Card(props) {
  const node = document.createElement("li");
  node.setAttribute("class", "card");

  if (props.backgroundColor) {
    node.style.backgroundColor = props.backgroundColor;
  }
  
  const text = document.createElement("span");
  text.textContent = props.text; 
  text.setAttribute('class', 'text-font')

  if (props.textHeadingColor){
    text.style.color = props.textHeadingColor
  }

  const paragraph = document.createElement("p");
  paragraph.textContent = props.content;

  if (props.textColor) {
    paragraph.style.color = props.textColor;
  }
  
  
  const button1 = button({
    text: props.button1Text,
    color: props.button1Color,
    backgroundColor: props.button1BackgroundColor
  });



  
  node.append(text);
  node.append(paragraph);
  node.append(button1);
  
  
  return node;
}

function Grid() {
  const node = document.createElement("ul");
  node.setAttribute("class", "grid");
  return node;
}

document.addEventListener("DOMContentLoaded", () => {
  
  const h1 = Heading("h1", "Last works");
  document.body.append(h1);
  
  const grid = Grid();
  document.body.append(grid);
  
  const data = [
    {
      text: "Startup Framework", 
      content: "Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.",
      textColor: '#1E0E62', 
      backgroundColor: '#EBEAED',
      textHeadingColor: '#1E0E62',
      button1Color: '#1E0E62',
      button1Text: "Explore"
    
    },
    {
      text: "Web Generator", 
      content: "Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.",
      backgroundColor: '#FFFFFF',
      textColor: '#1E0E62',
      textHeadingColor: '#1E0E62',
      button1Color: '#FFFFFF',
      button1Text: "Explore",
      button1BackgroundColor: '#25DAC5'

    },
    {
      text: "Slides 4", 
      content: "All of these components are made in the same style, and can easily be inegrated into projects, allowing you to create hundreds of solutions for your future projects.",
      backgroundColor: '#482BE7',
      textColor: '#FFFFFF',
      textHeadingColor: '#FFFFFF',
      
      button1Text: "Explore",
      button1Color: '#1E0E62'
    },
    {
      text: "Postcards", 
      content: "All frequently used elements are now in symbols. Use them to create interfaces really fast. Easily change icons, colors and text. Add new symbols to customize your design.",     
      textColor: '#FFFFFF',
      textHeadingColor: '#FFFFFF',
      button1Text: "Explore",
      button1BackgroundColor: '#FFFFFF',
      button1Color: '#1E0E62',
      button1Border: 'none'
    },  
  ];
  
  const cards = data.map((content) => Card(content));
  grid.append(...cards); 
}); 