#include <benchmark/benchmark.h>
#include <fmt/chrono.h>

#include <string>

#include "macros.hpp"
#include "pseudo_random.hpp"

#define ADD_BENCHMARK(FORMAT_STRING, BENCHMARK_NAME)         \
  static void BENCHMARK_NAME(benchmark::State& state) {      \
    char buffer[100];                                        \
    auto gen = pseudo_random_generator<std::tm>{};           \
    for (auto _ : state) {                                   \
      benchmark::DoNotOptimize(                              \
          fmt::format_to(buffer, FORMAT_STRING, gen.get())); \
    }                                                        \
  }                                                          \
  BENCHMARK(BENCHMARK_NAME)->Name(FULL_BENCHMARK_NAME(BENCHMARK_NAME))

ADD_BENCHMARK("{}", without_specs);
ADD_BENCHMARK("{:%H:%M}", with_specs_simple);
ADD_BENCHMARK("{:%d %m %Y %S %M %H}", with_specs_complex);

ADD_BENCHMARK("{:%Y}", year);
ADD_BENCHMARK("{:%y}", year_short);
ADD_BENCHMARK("{:%C}", year_century);
ADD_BENCHMARK("{:%G}", year_ISO_8601);
ADD_BENCHMARK("{:L%Oy}", year_short_locale);
ADD_BENCHMARK("{:L%Ey}", year_offset_locale);

ADD_BENCHMARK("{:%m}", month);
ADD_BENCHMARK("{:L%b}", abbreviated_month_locale);
ADD_BENCHMARK("{:L%B}", full_month_locale);

ADD_BENCHMARK("{:%W}", week);
ADD_BENCHMARK("{:%V}", week_ISO_8601);
ADD_BENCHMARK("{:L%OW}", week_locale);

ADD_BENCHMARK("{:%j}", day_of_year);
ADD_BENCHMARK("{:%d}", day_of_month);
ADD_BENCHMARK("{:%e}", day_of_month_space);
ADD_BENCHMARK("{:%w}", day_of_week);
ADD_BENCHMARK("{:L%Od}", day_of_month_locale);
ADD_BENCHMARK("{:L%a}", abbreviated_day_of_week_locale);
ADD_BENCHMARK("{:L%A}", full_day_of_week_locale);
ADD_BENCHMARK("{:L%Ow}", day_of_week_locale);

ADD_BENCHMARK("{:%H}", hour_24);
ADD_BENCHMARK("{:%I}", hour_12);
ADD_BENCHMARK("{:%M}", minute);
ADD_BENCHMARK("{:%S}", second);
ADD_BENCHMARK("{:L%OH}", hour_24_locale);
ADD_BENCHMARK("{:L%OI}", hour_12_locale);
ADD_BENCHMARK("{:L%OM}", minute_locale);
ADD_BENCHMARK("{:L%OS}", second_locale);

ADD_BENCHMARK("{:%F}", date_ISO_8601);
ADD_BENCHMARK("{:%T}", time_ISO_8601);
ADD_BENCHMARK("{:%z}", tz_ISO_8601);
ADD_BENCHMARK("{:L%c}", standard_datetime_locale);
ADD_BENCHMARK("{:L%Ec}", alternative_datetime_locale);

BENCHMARK_MAIN();
