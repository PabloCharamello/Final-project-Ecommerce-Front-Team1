import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";

export default function Footer() {
	return (
		<div className={style.footer}>
			<Container>
				<Row>
					<Col xs={6} lg={3}>
						<p className="fs-6 fw-bold mt-5">Customer Service</p>
						<Link
							to="#"
							className={`${style.footerLink} d-block text-decoration-none text-white mt-1`}
						>
							{"Help & Contact"}
						</Link>
						<Link
							to="#"
							className={`${style.footerLink} d-block text-decoration-none text-white mt-1`}
						>
							{"Help & Contact"}
						</Link>
						<Link
							to="#"
							className={`${style.footerLink} d-block text-decoration-none text-white mt-1`}
						>
							{"Help & Contact"}
						</Link>
						<Link
							to="#"
							className={`${style.footerLink} d-block text-decoration-none text-white mt-1`}
						>
							{"Help & Contact"}
						</Link>
					</Col>
					<Col xs={6} lg={3}>
						<p className="fs-6 fw-bold mt-5">Customer Service</p>
						<Link
							to="#"
							className={`${style.footerLink} d-block text-decoration-none text-white mt-1`}
						>
							{"Help & Contact"}
						</Link>
						<Link
							to="#"
							className={`${style.footerLink} d-block text-decoration-none text-white mt-1`}
						>
							{"Help & Contact"}
						</Link>
						<Link
							to="#"
							className={`${style.footerLink} d-block text-decoration-none text-white mt-1`}
						>
							{"Help & Contact"}
						</Link>
						<Link
							to="#"
							className={`${style.footerLink} d-block text-decoration-none text-white mt-1`}
						>
							{"Help & Contact"}
						</Link>
					</Col>
					<Col xs={6} lg={3}>
						<p className="fs-6 fw-bold mt-5">Customer Service</p>
						<Link
							to="#"
							className={`${style.footerLink} d-block text-decoration-none text-white mt-1`}
						>
							{"Help & Contact"}
						</Link>
						<Link
							to="#"
							className={`${style.footerLink} d-block text-decoration-none text-white mt-1`}
						>
							{"Help & Contact"}
						</Link>
						<Link
							to="#"
							className={`${style.footerLink} d-block text-decoration-none text-white mt-1`}
						>
							{"Help & Contact"}
						</Link>
						<Link
							to="#"
							className={`${style.footerLink} d-block text-decoration-none text-white mt-1`}
						>
							{"Help & Contact"}
						</Link>
					</Col>
					<Col xs={6} lg={3}>
						<p className="fs-6 fw-bold mt-5">Customer Service</p>
						<Link
							to="#"
							className={`${style.footerLink} d-block text-decoration-none text-white mt-1`}
						>
							{"Help & Contact"}
						</Link>
						<Link
							to="#"
							className={`${style.footerLink} d-block text-decoration-none text-white mt-1`}
						>
							{"Help & Contact"}
						</Link>
						<Link
							to="#"
							className={`${style.footerLink} d-block text-decoration-none text-white mt-1`}
						>
							{"Help & Contact"}
						</Link>
						<Link
							to="#"
							className={`${style.footerLink} d-block text-decoration-none text-white mt-1`}
						>
							{"Help & Contact"}
						</Link>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
