import { use, useEffect, useState } from "react";
import { AppContext } from "./appContext";
import './Pokedex.css';

export default function Notification(props) {
  const ctx = use(AppContext);

  const [playHideAnim, setPlayHideAnim] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      ctx.setPopNotification(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [ctx]);


  // const hideBtnHandler = () => {
  //   setPlayHideAnim(true);
  //   const timer = setTimeout(() => {
  //       // ctx.setPopNotification(false);
  //       setPlayHideAnim(false);
  //     }, 2000);
  // }
  

  return (
    <div
      className={`notification-container ${playHideAnim && 'hide'}`}
    >
      {props.children}
      <button
        onClick={() => {
          // ctx.setPopNotification(false);
          // hideBtnHandler()
        }}
      >
        X
      </button>
    </div>
  );
}
