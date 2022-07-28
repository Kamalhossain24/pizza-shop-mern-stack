import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
const About = () => {
    return (
        <>
            <Container style={{ marginTop: "50px", marginBottom:"50px" }}>
                <h1>Who we are?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora accusantium tenetur, architecto et in autem. Deserunt consequatur eos earum aspernatur libero, pariatur tenetur debitis placeat impedit repudiandae praesentium eligendi distinctio quibusdam ad provident beatae molestiae saepe voluptatibus cumque porro reprehenderit, unde nostrum! Et rerum corrupti possimus temporibus, accusantium eligendi excepturi provident voluptas quam fugiat, nemo corporis ut minus dolor earum similique est modi vitae doloremque consectetur. Voluptate, vitae pariatur nulla ipsam nam eligendi repellendus laborum deserunt omnis iste eaque, sapiente quisquam sit eum voluptas molestiae. Dolorem illo obcaecati fugiat odio dolore, iste non deserunt odit libero! Nihil dolorem laudantium architecto quis odio laborum eveniet quas magnam, accusantium pariatur. Placeat alias voluptate ad perferendis corrupti ut error, temporibus enim, reiciendis provident beatae non pariatur, facere ratione tenetur doloribus officia neque! Fugiat aliquam quas sed doloribus placeat consequatur fuga tempore minus, laudantium, reprehenderit blanditiis nihil unde cum molestias sapiente impedit harum? Praesentium quia fuga vel ducimus illo non harum officiis aut adipisci molestiae possimus repellendus, ullam iste amet veritatis. Ab hic nostrum veniam amet ipsam rem. Labore praesentium natus eaque quam corrupti ut ab sint reprehenderit fugit doloribus saepe quibusdam necessitatibus impedit nemo, provident, repudiandae iste laborum ex nihil veniam voluptatum? Reprehenderit.</p>
                <h1>Our Speciality</h1>
                <Row>
                    <Col md={6}>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure hic blanditiis ipsam accusantium quisquam nostrum porro illum vel perspiciatis magnam dolore tenetur adipisci dicta expedita maxime aperiam, velit voluptatum deleniti in sunt, ipsa voluptas! Repudiandae eligendi consequuntur numquam? Ab, fuga aliquid voluptas dolorem consequuntur accusantium minus sed ut, expedita incidunt aliquam impedit blanditiis ipsam. Totam eveniet molestiae cumque. Necessitatibus ullam quidem quis laboriosam accusantium est iure nihil? Molestias, eius odio? Voluptatem iure, doloribus repudiandae obcaecati recusandae ut. Ipsam, esse nobis repudiandae iure odio molestias reiciendis culpa dolorem eius in error officiis, ad dignissimos fugit consequuntur perferendis omnis. Repellat, commodi facere.</p>
                    </Col>
                    <Col md={6}><img src="/images/our-speciality.jpg" alt="" /></Col>
                </Row>
            </Container>
        </>
    )
}

export default About