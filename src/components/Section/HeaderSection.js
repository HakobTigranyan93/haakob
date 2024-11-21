// HeaderSection.js
import React from "react";

function HeaderSection({
  title,
  buttonText,
  titleClass = "text-[#1a1a1a]", // По умолчанию темный цвет для заголовка
  buttonClass = "text-[#666666]", // По умолчанию светлый цвет для кнопки
  containerClass = "pt-[80px]", // Стандартные отступы сверху
  reverseOrder = false, // Пропс для изменения порядка элементов
}) {
  return (
    <div className={`flex items-center ${containerClass} justify-between`}>
      {/* Если reverseOrder = true, меняем местами порядок заголовка и кнопки */}
      {reverseOrder ? (
        <>
          <button className={`text-[32px] ${buttonClass}`}>{buttonText}</button>
          <h2 className={`text-[32px] font-bold ${titleClass}`}>{title}</h2>
        </>
      ) : (
        <>
          <h2 className={`text-[32px] font-bold ${titleClass}`}>{title}</h2>
          <button className={`text-[32px] ${buttonClass}`}>{buttonText}</button>
        </>
      )}
    </div>
  );
}

export default HeaderSection;
