import Accordion from 'react-bootstrap/Accordion';

function AlwaysOpenExample() {
    return (
        <Accordion defaultActiveKey={['']} alwaysOpen>
            <Accordion.Item eventKey="0">
                <Accordion.Header>1. What is a Text?</Accordion.Header>
                <Accordion.Body>
                    As a student, much of your time will be spent interacting with texts of all types, shapes, sizes, and delivery methods.
                    In academic terms, a text is anything that conveys a set of meanings to the person who examines it. You might have thought that texts were limited to written materials, such as books, magazines, newspapers, and 'zines (an informal term for magazine that refers especially to fanzines and webzines). Those items are indeed texts—but so are movies, paintings, television shows, songs, political cartoons, online materials, advertisements, maps, works of art, and even rooms full of people. If we can look at something, explore it, find layers of meaning in it, and draw information and conclusions from it, we're looking at a text.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>2. Which of these would be a kind of text?</Accordion.Header>
                <Accordion.Body>
                    👉graphic novel,
                    television commercial,
                    photograph,
                    poem,
                    song 👈
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default AlwaysOpenExample;
