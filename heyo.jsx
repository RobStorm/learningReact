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

    function Blocko(props)
    {
      return(
        <div>
          <h1>{props.name}</h1>
          <p>{props.description}</p>
        </div>
        );
    }

    function Welcome(props)
    {
      return <h1>Hello alskjdlaksjdlkajsd {props.name}</h1>;
    }

    const elee = {name: "Rob Flob", description: "This is the block of rob"};
    const elee2 = {name: "Crab Tree", description: "I am the crab block"};
    
    function showBlock(myBlock)
    {
      //return <h1>{myBlock.name}</h1>;
      return <Blocko name = {myBlock.name} description = {myBlock.description}/>;
      // return <Welcome name = {myBlock.name}/>;
    }

    function showBlockos()
    {
      return(
        <div>
          {showBlock(elee)}
          {showBlock(elee2)}
        </div>
        )
    }

    function LotsaBlocks()
    {

    }

		const ele = <h1>its rob heyooooo</h1>;
      ReactDOM.render(showBlockos(), document.getElementById('root'));
      
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