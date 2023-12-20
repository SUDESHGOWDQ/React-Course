import Image1 from './Images/animal-7451969.jpg'
import Audio1 from './Audio/Tamil Bgm.mp3'
import Video1 from './video/Rallye - 1295.mp4'
function Html() {
  return (
    <div>
        <h1>Welcome To Html</h1>
        <br></br>
        <h1>Image Tag</h1>
        <img src="https://static.toiimg.com/thumb/msid-74669178,width-1280,resizemode-4/74669178.jpg" alt="" height={'400px'} width={'49%'}></img>
        <img src={Image1} alt="" height={'400px'} width={'49%'}></img>
        <br></br>
        <h1>Anchor Tag</h1>
        <a href='https://www.flipkart.com/' target={'_blank'} rel='noreferrer'>Flipkart</a>
        <br></br>
        <h1>Iframe Tag</h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/cqR3twbIoBo?si=vwD1m1MwJnEHatFg" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15583.871778902609!2d76.7196102304544!3d12.451855708193715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7674cd108043%3A0x4be8150fb924face!2sM.Shettihalli%2C%20Karnataka%20571807!5e0!3m2!1sen!2sin!4v1698307617452!5m2!1sen!2sin" width="600" height="315" allowfullscreen="" loading="lazy"></iframe>
        <br></br>
        <h1>Media Tag</h1>
        <audio src={Audio1} controls autoPlay loop muted></audio>
        <video src={Video1} autoPlay loop muted></video>
        <br></br>
        <h1>Table</h1>
        <table border={1}>
          <thead>
            <tr>
              <th>Slno</th>
              <th>Name</th>
              <th>Sal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>A</td>
              <td>10</td>
            </tr>
            <tr>
              <td rowSpan={2}>02</td>
              <td>B</td>
              <td>100</td>
            </tr>
            <tr>
              {/* <td>03</td> */}
              <td>C</td>
              <td>1000</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>@copywrite sudeshGowda</td>
            </tr>
          </tfoot>
        </table>
    </div>
  )
}

export default Html