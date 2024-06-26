import { Carousel, Image } from 'antd';
import { Caveat } from "next/font/google";

const contentStyle: React.CSSProperties = {
    height: '360px',
    color: '#000',
    lineHeight: '40px',
    textAlign: 'center',
  };
const caveat = Caveat({ subsets: ["latin"] });

  const Services: React.FC = () => (
        <div className="flex flex-col w-96 justify-center relative md:mb-0 md:mr-10 mb-4 bg-gray-primary rounded-full h-full">
            <Carousel autoplay style={contentStyle} dots={{className: "custom-dots"}}>
                <div className="justify-center mt-6">
                <Image className="rounded-lg" src={'/visual.svg'} width={350} height={250} alt=''/>
                <span className={caveat.className}>
                <p className="text-center text-4xl font-bold text-red-primary">Data Visualization</p>
                </span>
                </div>
                <div className="justify-center mt-6">
                <Image className="rounded-lg" src={'/image-recog.svg'} width={350} height={250} alt=''/>
                <span className={caveat.className}>
                <p className="text-center text-4xl font-bold text-red-primary">Image Recognition</p>
                </span>
                </div>
                <div className="justify-center mt-6">
                <Image className="rounded-lg" src={'/tracking.svg'} width={350} height={250} alt=''/>
                <span className={caveat.className}>
                <p className="text-center text-4xl font-bold text-red-primary">Delivery Tracking</p>
                </span>
                </div>
                <div className="justify-center mt-6">
                <Image className="rounded-lg" src={'/secured.svg'} width={350} height={250} alt=''/>
                <span className={caveat.className}>
                <h1 className="text-center text-4xl font-bold text-red-primary">Secured System</h1>
                </span>
                </div>
                <div className="justify-center mt-6">
                <Image className="rounded-lg" src={'/user-friendly.svg'} width={350} height={250} alt=''/>
                <span className={caveat.className}>
                <h1 className="font-bold text-4xl text-red-primary">User-Friendly</h1>
                </span>
                </div>
            </Carousel>
            </div>
    )
export default Services;