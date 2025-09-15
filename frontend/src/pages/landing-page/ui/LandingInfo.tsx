// icons
import { FaFireAlt } from 'react-icons/fa'
import { MdMoneyOff } from 'react-icons/md'
import { FaHandsHelping } from 'react-icons/fa'
import { SiLevelsdotfyi } from 'react-icons/si'
// react
import { useEffect, useMemo, useState } from 'react'

export default function LandingInfo() {
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
      {/* Цитата для lg+ */}
      <div className="hidden lg:flex w-full flex-col justify-center items-center p-8 xl:p-10 2xl:p-12 bg-bg-card">
        <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl poppins italic text-center">
          {quote.quote}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl poppins mt-2 text-center">
          {quote.autor}
        </p>
      </div>

      {/* Блоки с иконками */}
      <div className="w-full flex flex-wrap justify-center p-4 sm:p-5 gap-4 sm:gap-5 bg-bg-card">
        {/* Блоки */}
        {[
          {
            Icon: FaFireAlt,
            text: 'Уличные тренировки несут большую опасность, так как чаще всего вам некого спросить наставничества. Мы даём обширную базу упражнений и описания техник их выполнения.',
          },
          {
            Icon: MdMoneyOff,
            text: 'Мы понимаем, какого это упускать возможности из-за отсутствия финансов, поэтому основной функционал сайта полностью бесплатный.',
          },
          {
            Icon: FaHandsHelping,
            text: 'Вы всегда можете помочь проекту, сообщать о багах, возможных улучшениях или сотрудничать с нами.',
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="w-full sm:w-[45%] lg:w-[30%] min-w-[18rem] flex flex-col items-center bg-bg-hover p-4 sm:p-5 rounded-2xl select-none"
          >
            <item.Icon className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-3 sm:mb-4" />
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold poppins text-accent-400 text-center">
              {item.text}
            </p>
          </div>
        ))}

        {/* Четвёртый блок (категории) */}
        <div className="w-full flex flex-col items-center gap-4 bg-bg-hover p-4 sm:p-5 rounded-2xl select-none">
          <SiLevelsdotfyi className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-2" />
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold poppins text-accent-400 text-center">
            Все упражнения мы делим на категории: <span className="text-green-500">beginner</span> /{' '}
            <span className="text-orange-500">intermediate</span> /{' '}
            <span className="text-red-500">advanced</span>
          </p>

          {/* Категории */}
          <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 w-full justify-center items-center">
            {[
              {
                name: 'beginner',
                color: 'green-500',
                desc: 'Упражнения к которым часто не требуется особая подготовка.',
              },
              {
                name: 'intermediate',
                color: 'orange-500',
                desc: 'Упражнения требующие времени на освоение.',
              },
              {
                name: 'advanced',
                color: 'red-500',
                desc: 'Упражнения которые требуют значительной подготовки.',
              },
            ].map((cat) => (
              <div
                key={cat.name}
                className="flex flex-col justify-center items-center rounded-2xl font-bold poppins text-gray-50 p-3 sm:p-4"
              >
                <h1
                  className={`w-60 sm:w-64 lg:w-[15rem] flex justify-center items-center p-1.5 rounded-t-2xl bg-${cat.color} text-sm sm:text-base md:text-lg lg:text-xl`}
                >
                  {cat.name}
                </h1>
                <p
                  className={`w-60 sm:w-64 lg:w-[15rem] h-fit p-2 border border-${cat.color} text-sm sm:text-base md:text-lg lg:text-xl text-accent-100 text-center`}
                >
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="w-[90%] sm:w-[85%] lg:w-[75%] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold poppins text-accent-400 text-center mt-4">
            Это не значит что одни упражнения лучше других, просто для одних упражнений требуется
            подготовка, для других нет.
          </p>
        </div>
      </div>
    </div>
  )
}
