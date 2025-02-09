export default function ProjectSection() {
  return (
    <section className="w-full bg-white">
      <div className="w-full desktop:px-0 netbook:px-80 tablet:px-32 px-24 text-center desktop:py-[240px] tablet:py-[200px] mobile:py-[160px]">
        <div className="flex flex-col gap-32 mobile:gap-16 items-center">
          <h2 className="desktop:text-headline-3xl tablet:text-headline-2xl mobile:text-headline-s">
            세 직군의 노력 끝에 만든
          </h2>
          <p className="text-text-secondary text-title-m mobile:text-title-s max-w-[546px] w-full">
            DDD 크루들의 서비스를 살펴보세요! 4개월 간의 활동을 통해 소중한
            결과물을 얻으실 수 있어요.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-80 mobile:gap-64 desktop:pt-[120px] desktop:pb-[220px] tablet:pt-[120px] tablet:pb-[200px] mobile:pt-[120px] mobile:pb-[200px]">
        <div className="w-full flex flex-col gap-32 items-center desktop:px-0 netbook:px-80 tablet:px-32 px-24 mobile:gap-16 overflow-hidden">
          <div>
            <h2 className="desktop:text-headline-3xl tablet:text-headline-2xl mobile:text-headline-s">
              크루원들이 말하는 DDD는
            </h2>
            <p className="text-text-secondary text-title-m mobile:text-title-s whitespace-pre mobile:whitespace-normal">
              {
                "DDD 크루들의 서비스를 살펴보세요!\n4개월 간의 활동을 통해 소중한 결과물을 얻으실 수 있어요."
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
