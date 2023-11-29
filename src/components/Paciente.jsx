const Paciente = () => {
    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {' '}
                <span className="font-normal normal-case">Thor</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {' '}
                <span className="font-normal normal-case">Sergio</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {' '}
                <span className="font-normal normal-case">sergioreverte10@gmail.com</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Alta: {' '}
                <span className="font-normal normal-case">20/05/2019</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {' '}
                <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, explicabo. Veniam sunt rem nihil aspernatur minus a nulla odio. Possimus nisi praesentium sapiente iure. Illo quos quis accusantium voluptatum delectus.</span>
            </p>

        </div>
    )
}

export default Paciente
