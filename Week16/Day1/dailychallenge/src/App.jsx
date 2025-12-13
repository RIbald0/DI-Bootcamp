import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';

function App() {
  const cities = [
    { url: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg", legend: "Hong Kong" },
    { url: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp", legend: "Macao" },
    { url: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp", legend: "Japan" },
    { url: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp", legend: "Las Vegas" },
  ];
  return (
    <div style={{ maxWidth: '800px', margin: '50px auto' }}>
      <Carousel>
        {cities.map((city, index) => (
          <div key={index}>
            <img src={city.url}alt={city.legend}/>
            <p className="legend">{city.legend}</p>          
            </div>
        ))}
      </Carousel>
    </div>
  )
}

export default App
