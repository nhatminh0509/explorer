import Lottie from 'react-lottie'
import animationData from 'static/loading.json'
const Loading = () => {
  const options = {
    loop: true,
    autoplay: true,
    animationData
  }

  return <Lottie height={40} width={40} options={options}  />
}

export default Loading