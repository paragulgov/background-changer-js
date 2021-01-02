const btn = document.querySelector('button')
const wrapper_bg = document.querySelector('.wrapper')
const color_name = document.querySelector('span')

btn.addEventListener('click', () => {
   const color = getRandomColor()

   color_name.textContent = color
   wrapper_bg.style.backgroundColor = color

   console.log(color)
})

const hexElements = [
   0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'
]

function getRandomColor() {
   let hexColor = '#'

   for (let i = 0; i < 6; i++) {
      hexColor += hexElements[Math.floor(Math.random() * hexElements.length)]
   }

   return hexColor
}
