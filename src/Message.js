import React from 'react'

const Message = (props) => {
  return (
    <div className="Message" style = {styles}>
      {props.message.user.displayName}: {props.message.body}
    </div>
  )
}

 const styles = {
    message: {
    display:'flex',
    marginTop: '1rem',
    padding: '0 1rem',
  },

   details: {
     flex: 1,
     paddingLeft: '05. rem',

   }

  }


  

export default Message
