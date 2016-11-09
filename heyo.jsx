    function testo() {
    	return <h1>sup</h1>;
    }



    function getGreeting(user)
    {
      if(user)
      {
        return <h1>Hey! How's it going {formatName(user)}?</h1>;
      }
      else
      {
        return <p>Who are you...?</p>;
      }
    }

    const user = {
    firstName: 'Robo',
    lastName: 'Stormo'
    };

    function formatName(user)
    {
      return user.firstName+' '+user.lastName;
    }

		const ele = <h1>its rob heyooooo</h1>;
      ReactDOM.render(getGreeting(user), document.getElementById('root'));