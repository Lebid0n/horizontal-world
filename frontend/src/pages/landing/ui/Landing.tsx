// icons
import { FaFireAlt } from 'react-icons/fa'
import { MdMoneyOff } from 'react-icons/md'
import { FaHandsHelping } from 'react-icons/fa'
import { SiLevelsdotfyi } from 'react-icons/si'
// react
import { useEffect, useMemo, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

export default function LandingInfo() {
  const isDesktop = useMediaQuery({ minWidth: 1024 })
  const [quote, setQuote] = useState({ quote: 'loading...', autor: '' })

  const quotesList = useMemo(
    () => [
      {
        quote: '«Я могу проиграть. Но я не могу не попробовать.»',
        autor: 'Michael Jeffrey Jordan',
      },
      {
        quote: '«Без дисциплины сила превращается в слабость.»',
        autor: 'Владимир Кличко',
      },
      {
        quote: '«Если ты падаешь — вставай красиво.»',
        autor: 'Евгений Плющенко',
      },
      {
        quote: '«Не горы впереди изнуряют человека, а камешек в ботинке.»',
        autor: 'Muhammad Ali (Cassius Marcellus Clay Jr)',
      },
    ],
    []
  )

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotesList.length)
    setQuote(quotesList[randomIndex])
  }, [quotesList])

  return (
    <div className="w-full flex flex-col justify-center items-center bg-bg-primary">
      {isDesktop && (
        <div className="w-[100vw] flex flex-col justify-center items-center p-[5vw] bg-bg-card">
          <h1 className="text-3xl popins italic">{quote.quote}</h1>
          <p className="text-2xl popins">{quote.autor}</p>
        </div>
      )}
      <div className="w-full flex flex-wrap justify-center p-5 gap-5 bg-bg-card">
        <div className="w-[30vw] min-w-75 flex flex-col items-center bg-bg-hover p-5 rounded-2xl select-none">
          <FaFireAlt className="w-15 h-15" />
          <p className="text-2xl font-bold popins text-primary-400">
            Уличные тренировки несут большую опасность, так как чаще всего вам неукого спросить
            наставничества. Мы даём обширную базу упражнений и описания техник их выполнения.
          </p>
        </div>
        <div className="w-[30vw] min-w-75 flex flex-col items-center bg-bg-hover p-5 rounded-2xl select-none">
          <MdMoneyOff className="w-15 h-15" />
          <p className="text-2xl font-bold popins text-primary-400">
            Мы понимаем какого это упускать возможности из за отсутствия финансов, потому основной
            функционал сайта полностью бесплатный.
          </p>
        </div>
        <div className="w-[30vw] min-w-75 flex flex-col items-center bg-bg-hover p-5 rounded-2xl select-none">
          <FaHandsHelping className="w-15 h-15" />
          <p className="text-2xl font-bold popins text-primary-400">
            Вы всегда можете помочь проекту, сообщяйте о багах, возможных улучшениях, или свяжитесь
            с нами по поводу сотрудничества.
          </p>
        </div>
        <div className="w-[92vw] min-w-75 flex flex-col items-center gap-2 bg-bg-hover p-5 rounded-2xl select-none">
          <SiLevelsdotfyi className="w-15 h-15" />
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-2xl font-bold popins text-primary-400">
              Все упражнения мы делим на категорий:
              <span className="text-green-500"> beginner</span> /{' '}
              <span className="text-orange-500">average</span> /{' '}
              <span className="text-red-500">master</span>
            </p>
            {isDesktop ? (
              <div className="w-1/2 flex justify-center items-center gap-2">
                <div className="flex flex-col justify-center items-center rounded-2xl text-2xl text-gray-50 p-4 popins font-bold">
                  <h1 className="w-[15vw] flex justify-center items-center p-1.5 rounded-t-2xl bg-green-500">
                    beginner
                  </h1>
                  <p className="w-[15vw] h-[20vh] border p-2 border-green-500">
                    Упражнения к которым часто не требуется особая подготовка.
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center rounded-2xl text-2xl text-gray-50 p-4 popins font-bold">
                  <h1 className="w-[15vw] flex justify-center items-center p-1.5 rounded-t-2xl bg-orange-500">
                    average
                  </h1>
                  <p className="w-[15vw] h-[20vh] p-2 border border-orange-500">
                    Упражнения требующие времени на освоение.
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center rounded-2xl text-2xl text-gray-50 p-4 popins font-bold">
                  <h1 className="w-[15vw] flex justify-center items-center p-1.5 rounded-t-2xl bg-red-500">
                    master
                  </h1>
                  <p className="w-[15vw] h-[20vh] p-2 border border-red-500">
                    Упражнения которые требуют значитительной подготовки.
                  </p>
                </div>
              </div>
            ) : (
              <div className="w-full justify-center items-center gap-2">
                <div className="flex flex-col justify-center items-center rounded-2xl text-2xl text-gray-50 p-4 popins font-bold">
                  <h1 className="w-60 flex justify-center items-center p-1.5 rounded-t-2xl bg-green-500">
                    beginner
                  </h1>
                  <p className="w-60 h-[20vh] border p-2 border-green-500">
                    Упражнения к которым часто не требуется особая подготовка.
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center rounded-2xl text-2xl text-gray-50 p-4 popins font-bold">
                  <h1 className="w-60 flex justify-center items-center p-1.5 rounded-t-2xl bg-orange-500">
                    average
                  </h1>
                  <p className="w-60 h-[20vh] p-2 border border-orange-500">
                    Упражнения требующие времени на освоение.
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center rounded-2xl text-2xl text-gray-50 p-4 popins font-bold">
                  <h1 className="w-60 flex justify-center items-center p-1.5 rounded-t-2xl bg-red-500">
                    master
                  </h1>
                  <p className="w-60 h-[20vh] p-2 border border-red-500">
                    Упражнения которые требуют значитительной подготовки.
                  </p>
                </div>
              </div>
            )}
            <p className="w-[75%] text-2xl font-bold popins text-primary-400">
              Это не значит что одни упражнения лучше других, просто для одних упражнений требуется
              подготовка, для других нет.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
