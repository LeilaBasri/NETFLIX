import { useState, useEffect } from "react";
import CardAccordion from "./CardAccordion";

const CardAccordionList = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/comments');
      const result = await response.json();
      setData(result.slice(0, 6)); 
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {data.map(item => (
        <CardAccordion key={item.id} title={item.name} body={item.body} />
      ))}
    </div>
  );

};

export default CardAccordionList;
