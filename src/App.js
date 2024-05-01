import './App.css';

import Homepage from './components/Homepage';

 

function App() {
  // Data that will be distributed to the components in our page

  // 1. Make blog entry data (this will eventually represent our state but right now its manually entered data):
  let allEntries = [
    {
      date: "11/12/2020",
      title: "On the Street in Brooklyn",
      image: "/onthestreet.jpg",
      body: "President and CEOPresident and President and CEOPresident  President and CEOPresident  President and CEOPresident  President and CEOPresident CEOPresident and CEOPresident and CEOPresident and CEOPresident and CEOPresident and CEO President and CEO President and CEO President and CEO President and CEO President and CEO President and CEO President and CEO dfgfdgfdgdf  fdg d gfedg5regd drgregr",
    },
    {
      date: "11/11/2020",
      title: "Vintage in Vogue",
      image: "/vintageinvogue.jpg",
      body: "Phgjghj ghjhg jghjgh jgjhg jgh jresident and CEOPresident and CEOPresident and CEOPresident and CEOPresident and CEOPresident and CEOPresident and CEO President and CEO President and CEO President and CEO President and CEO President and CEO President and CEO President and CEO",
    },
  ];

  return (
    <div className="App">
      {/* Here we are passing in our allEntries data as props into Homepage: */}
      <Homepage entries={allEntries}/>

    </div>
  );
}

export default App;