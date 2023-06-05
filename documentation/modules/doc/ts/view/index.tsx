import React from 'react';
import { Nav } from '@bgroup/simply-docs/nav';
import { CopyableImplementation } from '@bgroup/simply-docs/copyable-implementation';
import { FormColorPicker } from '@bgroup/simply-docs/form-color';

export function Page() {
	const [show, setShow] = React.useState(false);
	function handleModalColor() {
		setShow(!show);
	}
	return (
		<>
			<div className="doc__bg"></div>
			<div className="wrapper">
				<article className="doc__content">
					<section className="js-section">
						<h3 className="section__title">Get Started</h3>
						<p>
							Bienvenido, en nuestro menu izquierdo puede buscar los componentes que necesite usar. Se le
							recuerda instalar la libreria por si todavia no la ha instalado.
						</p>
						<h3 className="section__title">Installation</h3>
						<div className="code__block code__block--notabs">
							<pre className="code code--block">
								<CopyableImplementation>{`npm i @bgroup/ui `}</CopyableImplementation>
							</pre>
						</div>
					</section>
					<section className="section__modal-color">
						<FormColorPicker show={show} handleModalColor={handleModalColor} />
					</section>
				</article>
			</div>
		</>
	);
}
