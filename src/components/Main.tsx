import { Data } from "../App"
import { Spinner } from "react-activity";
import "react-activity/dist/library.css";

type DataProp = {
  data: Data | undefined,
  loading: boolean,
  error: boolean
}

const Main = ({ data, loading, error }: DataProp) => {
  const HandleMainComponent = () => {
    if (loading) {
      return (<Spinner size={25}/>)
    } else {
      if (error) {
        return (
          <>
            <img src="warning.png" alt="error" />
            <div className="text-gray-600 text-lg m-3">Error! Not Found!</div>
          </>
        )
      } else if (data === undefined) {
        return (
          <>
            <div className='text-gray-600 text-xl mb-8'>Enter Zip Code to get information...</div>
            <img src="seo.png" alt="search default" />
          </>
        )
      } else if (data) {
        return (
          <div className="w-[90%] md:w-[50%] lg:w-[600px] flex md:flex-col gap-3 flex-wrap justify-center">
            {data.places.map((item, index) => {
              return (
                <div key={index} className="bg-white w-[200px] md:w-full flex flex-col md:flex-row p-3 rounded-md shadow-md items-center justify-stretch gap-4">
                  <div className="basis-1/6">
                    <img src="mail.png" alt="mail logo" />
                  </div>
                  <div className="basis-2/3">
                    <div><span className="font-semibold">Place:</span> {item["place name"]}</div>
                    <div><span className="font-semibold">State:</span> {item.state}</div>
                    <div><span className="font-semibold">Zip:</span> {data["post code"]}</div>
                    <div><span className="font-semibold">Country:</span> {data.country}</div>
                  </div>
                  <div className="hidden md:block basis-1/4">
                    <div className="flex md:justify-end"><span className="font-semibold mr-1">Latitude: </span> {item.latitude}°</div>
                    <div className="flex md:justify-end"><span className="font-semibold mr-1">Longitude: </span> {item.longitude}°</div>
                  </div>
                </div>
              )
            })}
          </div>
        )
      }
    }
  }

  return (
    <div className='flex flex-col items-center pt-16'>
      <HandleMainComponent />
    </div>
  )
}

export default Main