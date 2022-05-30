import React, { useState, useEffect } from "react";
import axios from "axios";
import "./event.css";
import EventForm from "./eventForm";
function Afficheevent() {
  const [load, setLoader] = useState(false);
  const [data, setData] = useState();
  const [days, setDays] = useState(-1);
  const [hours, setHours] = useState(-1);
  const [minutes, setMinutes] = useState(-1);
  const months = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };

  useEffect(() => {
    setLoader(true);
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "activities/Events")
      .then((res) => {
        setData(res.data.events[0]);
        //test 1 :ne7sbou nbr de jours
        if (
          //si month event > month actuel on fait une simple substraction
          res.data.events[0] &&
          parseInt(
            new Date(res.data.events[0].date)
              .toLocaleDateString()
              .toString()
              .slice(
                0,
                new Date(res.data.events[0].date)
                  .toLocaleDateString()//taaty mm/dd/yyyy
                  .indexOf("/")
                  //el month we5ou awel position donc naamel slice mellouwel lin nal9a awel */*
              ) -
              new Date()
                .toLocaleDateString()
                .slice(0, new Date().toLocaleDateString().indexOf("/"))
          ) === 1
          //here we test if diff between months
        ) {
          if (
            res.data.events[0] &&
            parseInt(
              new Date(res.data.events[0].date).toTimeString().slice(3, 4)
            ) > parseInt(new Date().toTimeString().slice(3, 4))
          ) {
            setMinutes(
              parseInt(
                new Date(res.data.events[0].date).toTimeString().slice(3, 5)
              ) - parseInt(new Date().toTimeString().slice(3, 5))
            );
            setHours(
              parseInt(
                new Date(res.data.events[0].date).toTimeString().slice(0, 2)
              ) - parseInt(new Date().toTimeString().slice(0, 2))
            );
          } else {
            setMinutes(
              parseInt(
                new Date(res.data.events[0].date).toTimeString().slice(3, 5)
              ) +
                60 -
                parseInt(new Date().toTimeString().slice(3, 5))
            );
            setHours(
              parseInt(
                new Date(res.data.events[0].date).toTimeString().slice(0, 2)
              ) -
                parseInt(new Date().toTimeString().slice(0, 2)) -
                1
            );
          }
          if (
            //test pour calculer les jours, selon nmbr de jours du mois actuel
            months[
              new Date()
                .toLocaleDateString()
                .slice(0, new Date().toLocaleDateString().indexOf("/"))
            ] === 31
          ) {
            setDays(
              parseInt(new Date(res.data.events[0].date).getDate().toString()) +
                31 -
                new Date().getDate().toString()
              
            );
          } else if (
            months[
              new Date()
                .toLocaleDateString()
                .slice(0, new Date().toLocaleDateString().indexOf("/"))
            ] === 30
          ) {
            setDays(
              parseInt(new Date(res.data.events[0].date).getDate().toString()) +
                30 -
                new Date().getDate().toString() 
            );
          } else {
            setDays(
              parseInt(new Date(res.data.events[0].date).getDate().toString()) +
                28 -
                new Date().getDate().toString() +
                new Date()
                  .toLocaleDateString()
                  .slice(0, new Date().toLocaleDateString().indexOf("/")) 
            );
          }
        }
        else if (
          //if fnafs el month
          res.data.events[0] &&
          parseInt(
            new Date(res.data.events[0].date)
              .toLocaleDateString()
              .toString()
              .slice(
                0,
                new Date(res.data.events[0].date)
                  .toLocaleDateString()
                  .indexOf("/")
              ) -
              new Date()
                .toLocaleDateString()
                .slice(0, new Date().toLocaleDateString().indexOf("/"))
          ) === 0
        ){
          setDays( parseInt(new Date(res.data.events[0].date).getDate().toString())  -
          new Date().getDate().toString() )
          if (
            res.data.events[0] &&
            parseInt(
              new Date(res.data.events[0].date).toTimeString().slice(3, 4)
            ) > parseInt(new Date().toTimeString().slice(3, 4))
          ) {
            setMinutes(
              parseInt(
                new Date(res.data.events[0].date).toTimeString().slice(3, 5)
              ) - parseInt(new Date().toTimeString().slice(3, 5))
            );
            setHours(
              parseInt(
                new Date(res.data.events[0].date).toTimeString().slice(0, 2)
              ) - parseInt(new Date().toTimeString().slice(0, 2))
            );
          } else {
            setMinutes(
              parseInt(
                new Date(res.data.events[0].date).toTimeString().slice(3, 5)
              ) +
                60 -
                parseInt(new Date().toTimeString().slice(3, 5))
            );
            setHours(
              parseInt(
                new Date(res.data.events[0].date).toTimeString().slice(0, 2)
              ) -
                parseInt(new Date().toTimeString().slice(0, 2)) -
                1
            );
          }
          if (
            res.data.events[0] &&
            parseInt(
              new Date(res.data.events[0].date).toTimeString().slice(0, 2)
            ) < parseInt(new Date().toTimeString().slice(0, 2))
          ) {
            setDays(days - 1);
            setHours(hours + 24);
          }
        }
        const interval = setInterval(() => {
          if (
            //si month event > month actuel on fait une simple substraction
            res.data.events[0] &&
            parseInt(
              new Date(res.data.events[0].date)
                .toLocaleDateString()
                .toString()
                .slice(
                  0,
                  new Date(res.data.events[0].date)
                    .toLocaleDateString()//taaty mm/dd/yyyy
                    .indexOf("/")
                    //el month we5ou awel position donc naamel slice mellouwel lin nal9a awel */*
                ) -
                new Date()
                  .toLocaleDateString()
                  .slice(0, new Date().toLocaleDateString().indexOf("/"))
            ) === 1
            //here we test if diff between months
          ) {
            if (
              res.data.events[0] &&
              parseInt(
                new Date(res.data.events[0].date).toTimeString().slice(3, 4)
              ) > parseInt(new Date().toTimeString().slice(3, 4))
            ) {
              setMinutes(
                parseInt(
                  new Date(res.data.events[0].date).toTimeString().slice(3, 5)
                ) - parseInt(new Date().toTimeString().slice(3, 5))
              );
              setHours(
                parseInt(
                  new Date(res.data.events[0].date).toTimeString().slice(0, 2)
                ) - parseInt(new Date().toTimeString().slice(0, 2))
              );
            } else {
              setMinutes(
                parseInt(
                  new Date(res.data.events[0].date).toTimeString().slice(3, 5)
                ) +
                  60 -
                  parseInt(new Date().toTimeString().slice(3, 5))
              );
              setHours(
                parseInt(
                  new Date(res.data.events[0].date).toTimeString().slice(0, 2)
                ) -
                  parseInt(new Date().toTimeString().slice(0, 2)) -
                  1
              );
            }
            if (
              //test pour calculer les jours, selon nmbr de jours du mois actuel
              months[
                new Date()
                  .toLocaleDateString()
                  .slice(0, new Date().toLocaleDateString().indexOf("/"))
              ] === 31
            ) {
              setDays(
                parseInt(new Date(res.data.events[0].date).getDate().toString()) +
                  31 -
                  new Date().getDate().toString()
                
              );
            } else if (
              months[
                new Date()
                  .toLocaleDateString()
                  .slice(0, new Date().toLocaleDateString().indexOf("/"))
              ] === 30
            ) {
              setDays(
                parseInt(new Date(res.data.events[0].date).getDate().toString()) +
                  30 -
                  new Date().getDate().toString() 
              );
            } else {
              setDays(
                parseInt(new Date(res.data.events[0].date).getDate().toString()) +
                  28 -
                  new Date().getDate().toString() +
                  new Date()
                    .toLocaleDateString()
                    .slice(0, new Date().toLocaleDateString().indexOf("/")) 
              );
            }
          }
          if (
            res.data.events[0] &&
            parseInt(
              new Date(res.data.events[0].date).toTimeString().slice(3, 4)
            ) > parseInt(new Date().toTimeString().slice(3, 4))
          ) {
            setMinutes(
              parseInt(
                new Date(res.data.events[0].date).toTimeString().slice(3, 5)
              ) - parseInt(new Date().toTimeString().slice(3, 5))
            );
            setHours(
              parseInt(
                new Date(res.data.events[0].date).toTimeString().slice(0, 2)
              ) - parseInt(new Date().toTimeString().slice(0, 2))
            );
          } else {
            setMinutes(
              parseInt(
                new Date(res.data.events[0].date).toTimeString().slice(3, 5)
              ) +
                60 -
                parseInt(new Date().toTimeString().slice(3, 5))
            );
            setHours(
              parseInt(
                new Date(res.data.events[0].date).toTimeString().slice(0, 2)
              ) -
                parseInt(new Date().toTimeString().slice(0, 2)) -
                1
            );
          }
          if (
            res.data.events[0] &&
            parseInt(
              new Date(res.data.events[0].date).toTimeString().slice(0, 2)
            ) < parseInt(new Date().toTimeString().slice(0, 2))
          ) {
            setDays(days - 1);
            setHours(hours + 24);
          }
        }, 60000);

        setLoader(false);
        console.log(hours + "hours")
        return () => clearInterval(interval);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [participate, setParticipate] = useState(false);
  return (
    <div className="eventpage">
      <div className="topevent">
        <div className="topleftevent">
          <div className="welcomeevent">
            <div className="soon">Event Coming Soon</div>
            <div className="tuned">Stay Tuned !</div>
          </div>
          {data && (
            <div className="typeevent">
              {data.type} : {data.name}{" "}
            </div>
          )}
          {data && (
            <div className="date">
              {" "}
              {new Date(data.date).getDate()}{" "}
              {new Date(data.date).toString().slice(4, 7)}{" "}
              {new Date(data.date).getFullYear()} at{" "}
              {new Date(data.date).toLocaleTimeString()}
            
            </div>
       
          )}
        </div>
        <img className="joinEventImage" src="/images/eventAttends.png" alt="" />
      </div>
      <div className="animatedDate">
        <div className="specificdate">
          <div className="blocks">
            {days>=0 && (
              <div className="block">
                {days.toString().length === 1 ? 0 : days.toString().slice(0, 1)}
              </div>
            )}
            {days>=0  && (
              <div className="block">
                {days.toString().length === 1
                  ? days
                  : days.toString().slice(1, 2)}
              </div>
            )}
          </div>
          <div className="what">Days</div>
        </div>
        <div className="specificdate">
          <div className="blocks">
            <div className="blocks">
              {hours>=0 && (
                <div className="block">
                  {hours.toString().length === 1
                    ? 0
                    : hours.toString().slice(0, 1)}
                </div>
              )}
              {hours >=0 && (
                <div className="block">
                  {hours.toString().length === 1
                    ? hours
                    : hours.toString().slice(1, 2)}
                </div>
              )}
            </div>
          </div>
          <div className="what">Hours</div>
        </div>
        <div className="specificdate">
          <div className="blocks">
            {minutes>=0  && (
              <div className="block">
                {minutes.toString().length === 1
                  ? 0
                  : minutes.toString().slice(0, 1)}
              </div>
            )}
            {minutes >=0&& (
              <div className="block">
                {minutes.toString().length === 1
                  ? minutes
                  : minutes.toString().slice(1, 2)}
              </div>
            )}
          </div>
          <div className="what">Minutes</div>
        </div>
      </div>

      <div className="intersted">Are you interested ?</div>
      <div
        className="joinEvent"
        onClick={() => {
          setParticipate(!participate);
        }}
      >
        <a
          href="#participateEvent"
          style={{ textDecoration: "none", color: "white" }}
        >
          Participate
        </a>
      </div>
      {participate ? (
        <div className="participation" id="participateEvent">
          <div className="fillform">Fill out this form to register</div>
          <div className="partinline">
            <div className="descrblock">
              {/*   <img className="eventImage" src="/images/dronevent.jpg" alt="" /> */}
              <div className="eventDescription">
                <div className="descriptionTitle">
                  Your mission, if you accept it
                </div>
                <div className="realdesc">
                  {data && <div>{data.description}</div>}
                </div>
              </div>
              {/*    <img className="joinEventImage" src="" alt="" /> */}
            </div>

            <EventForm eventName={data.name}/>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Afficheevent;
