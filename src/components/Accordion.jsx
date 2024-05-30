import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const data = [
  {
    id: 1,
    title: "Acoordion One",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde aut perferendis vel necessitatibus quos, consequuntur aperiam rem, nam facere ipsa totam voluptas distinctio. Ratione ducimus ullam placeat i unde voluptate!",
  },
  {
    id: 2,
    title: "Acoordion Two",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde aut perferendis vel necessitatibus quos, consequuntur aperiam rem, nam facere ipsa totam voluptas distinctio. Ratione ducimus ullam placeat i unde voluptate!",
  },
  {
    id: 3,
    title: "Acoordion Three",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde aut perferendis vel necessitatibus quos, consequuntur aperiam rem, nam facere ipsa totam voluptas distinctio. Ratione ducimus ullam placeat i unde voluptate!",
  },
  {
    id: 4,
    title: "Acoordion Four",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde aut perferendis vel necessitatibus quos, consequuntur aperiam rem, nam facere ipsa totam voluptas distinctio. Ratione ducimus ullam placeat i unde voluptate!",
  },
];
function Accordion() {
  const [open, setOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map(item => (
        <AccordionItem key={item.id} item={item} open={open} setOpen={setOpen}>
          {item.text}
        </AccordionItem>
      ))}
    </div>
  );
}

export default Accordion;

function AccordionItem({ item, setOpen, open, children }) {
  const isOpen = item.id === open;
  return (
    <div className={`accordion-item ${isOpen ? "accordion__expanded" : ""}`}>
      <div className="accordion-item__header" onClick={() => setOpen(item.id)}>
        <div>{item.title}</div>
        <ChevronDownIcon
          style={{
            width: "1.3rem",
            transition: "all 0.3s ease-out",
            rotate: isOpen ? "180deg" : "",
          }}
        />
      </div>
      <div className="accordion-item__content">{children}</div>
    </div>
  );
}
