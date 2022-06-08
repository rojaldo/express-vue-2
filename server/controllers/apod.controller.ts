import { Request, Response } from "express";

enum Status {
    OK = 0,
    UNAUTHORIZED = 1,
    INVALID_DATE = 2,
    NOT_IMPLEMENTED = 3,
    UNKNOWN_ERROR = 4
}

export const getApod = (req: Request, res: Response) => {
    // get parameter api_key
    let status = Status.OK;
    const apiKey = req.query.api_key;
    if (apiKey === "MY_KEY") {

    } else {
        status = Status.UNAUTHORIZED;
    }
    const selectedDate = req.query.date;
    console.log('selectedDate: ' + selectedDate);
    
    if (selectedDate) {
        // check forma of date: YYYY-MM-DD or YYYY-M-D
        const dateRegex = /^\d{4}-\d{1,2}-\d{1,2}$/;
        if (dateRegex.test(selectedDate.toString())) {
            status = Status.NOT_IMPLEMENTED;
        }else {
            status = Status.INVALID_DATE;
        }
    }

    switch (status) {
        case Status.OK:
            res.json(
                {
        
                    date: "2022-06-08",
                    explanation: "What are those unusual streaks? Some images of planet Earth show clear bright streaks that follow the paths of ships.  Known as ship tracks, these low and narrow bands are caused by the ship's engine exhaust. Water vapor condenses around small bits of exhaust known as aerosols, which soon grow into floating water drops that efficiently reflect sunlight. Ship tracks were first discovered in 1965 in Earth images taken by NASA's TIROS satellites.  Multiple ship tracks are visible across the featured image that was captured in 2009 over the Pacific Ocean by the MODIS instrument on NASA's Terra satellite. Inspired by ship-tracks, some scientists have suggested deploying a network of floating buoys in the worlds' oceans that spray salt-aerosol containing sea-water into the air so that, with the help of the wind, streams of sunlight-reflecting clouds would also form.  Why do this?  These human-made clouds could reflect so much sunlight they might help fight global warming.    Today is: World Oceans Day",
                    hdurl: "https://apod.nasa.gov/apod/image/2206/ShipTracks_Terra_4892.jpg",
                    media_type: "image",
                    service_version: "v1",
                    title: "Ship Tracks over the Pacific Ocean",
                    url: "https://apod.nasa.gov/apod/image/2206/ShipTracks_Terra_960.jpg"
        
                }
            );
            break;
        case Status.UNAUTHORIZED:
            // send json response with status code 401
            res.status(401).json(
                {
                    status: status,
                    message: "Unauthorized"
                }
            );
            break;
        case Status.INVALID_DATE:
            // send json response with status code 400
            res.status(400).json(
                {
                    status: status,
                    message: "Invalid date"
                }
            );
            break;
        case Status.NOT_IMPLEMENTED:
            // send json response with status code 501
            res.status(501).json(
                {   
                    status: status,
                    message: "Date is not implemented as parameter yet"
                }
            );
            break;
    
        default:
            // send json response with status code 500
            res.status(500).json(
                {
                    status: status,
                    message: "Unknown error"
                }
            );
            break;
    }

};