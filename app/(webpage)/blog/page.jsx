import Image from 'next/image'
import React from 'react'
import Slidebar from '@/components/blog/slidebar'

const page = () => {
    return (
        <>
            <div className="relative overflow-hidden bg-no-repeat bg-cover bg-center">
                <div id="hero" className="max-h-[80vh]">
                    <Image src={'/img/soheb-zaidi-awin-9RBlpE-unsplash.jpg'} width={1920} height={1080} />
                </div>
            </div>

            <div className=" mb-20 mt-24 mx-auto flex flex-col items-center md:flex-row  max-w-screen-xl gap-24">
                <div className="flex items-center justify-center w-full text-center md:text-left md:w-1/2 lg:w-4/5 ">
                    <div>
                        <div className="mb-5 border-b border-gray-200">
                            <div className="flex flex-wrap items-baseline -mt-2">
                                <h5>13-06-2023</h5>
                                <p className="mt-1 ml-2 ">Higuera Golf Club</p>
                            </div>
                        </div>
                        <h1 className="text-4xl text-main">LECCIÓN PARA PRINCIPIANTES: LA POSTURA EN EL SWING
                        </h1><br/>
                            <p className="text-justify text-xl mb-5">La postura en el swing de golf es un aspecto clave para lograr
                                un golpe consistente y efectivo. A continuación, haremos un repaso de las recomendaciones
                                generales que conviene tener en cuenta para realizar una correcta postura en el swing de golf:</p>
                            <ul className="text-justify text-xl mb-5 ml-10 list-decimal">
                                <li className="mb-1">Posición de los pies: Para empezar, coloca los pies separados al ancho de los
                                    hombros y
                                    asegúrate de que estén paralelos a la línea de golpe.</li>
                                <li className="mb-1">El peso del cuerpo: Distribuye el peso del cuerpo de manera uniforme en ambos pies,
                                    lo que te
                                    ayudará a mantener el equilibrio durante el swing.</li>
                                <li className="mb-1">La flexión de las rodillas: Flexiona ligeramente las rodillas para ayudar a
                                    mantener el
                                    equilibrio y para permitir que puedas girar los hombros con mayor facilidad durante el swing.
                                </li>
                                <li className="mb-1">La inclinación de la columna vertebral: Inclínate ligeramente hacia delante desde
                                    la cintura
                                    para que la columna vertebral esté en una posición neutral y para que puedas alcanzar la bola
                                    con mayor facilidad.</li>
                                <li className="mb-1">La posición de las manos: Asegúrate de que las manos estén colocadas delante de la
                                    bola y en
                                    línea con la cabeza del palo. Esto te ayudará a hacer un contacto limpio con la bola.</li>
                                <li className="mb-1">La correcta distancia a la bola: La distancia de la bola con respecto al cuerpo es
                                    importante, ya que esto te permitirá alcanzar la bola en el punto adecuado del swing. En
                                    general, la bola debe estar ubicada en el centro de tu postura, justo delante de tu posición.
                                </li>
                            </ul>
                            <p className="text-justify text-xl mb-5"> Recuerda que cada golfista tiene una postura única y que la mejor
                                postura para ti dependerá de varios factores, como tu altura, tu tipo de cuerpo, tu estilo de swing
                                y tus preferencias personales.</p>
                            <p className="text-justify text-xl mb-5"> Por lo tanto, lo más recomendable es que experimentes, que pruebes
                                con diferentes posturas hasta encontrar la que mejor funcione para ti.</p>

                            <div className="items-center justify-center hidden md:block">
                                <Image className='object-fill' src={'/img/courtney-cook-Nka1wVAQWa4-unsplash.jpg'} width={1000} height={600} />
                            </div>
                    </div>
                </div>

                <Slidebar/>

            </div>
        </>
    )
}

export default page