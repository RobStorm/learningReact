    function testo() {
    	return <p>sup</p>;
    }

    function getGreeting(user)
    {
      if(user)
      {
        return <h1>Hey! How is it going {formatName(user)}?</h1>;
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

    const element = (
    <h1>
    Hello, {formatName(user)}!
    </h1>
    );

    

    function formatName(user)
    {
      return user.firstName+' '+user.lastName;
    }

		const ele = <h1>its rob heyooooo</h1>;
      ReactDOM.render(getGreeting(user), document.getElementById('root'));
      
    function tick()
    {

      const elemento = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );

      ReactDOM.render(elemento, document.getElementById('poop'));
    }
      tick();
      setInterval(tick, 1000);