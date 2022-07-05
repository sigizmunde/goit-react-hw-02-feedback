import { SectionBox } from "./Section.styled";

function Section({ heading, children }) {
  return (
    <SectionBox>
      <h2 className="block__caption">{heading}</h2>
      {children}
    </SectionBox>
  );
}

export default Section;
