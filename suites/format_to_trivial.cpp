#include <benchmark/benchmark.h>
#include <fmt/format.h>

#include <cfloat>
#include <cstddef>
#include <cstdint>
#include <string>
#include <string_view>

#include "macros.hpp"
#include "pseudo_random.hpp"

#define ADD_BENCHMARK(TYPE, BENCHMARK_NAME)                              \
  static void BENCHMARK_NAME(benchmark::State& state) {                  \
    char buffer[100];                                                    \
    auto gen = pseudo_random_generator<TYPE>{};                          \
    for (auto _ : state) {                                               \
      benchmark::DoNotOptimize(fmt::format_to(buffer, "{}", gen.get())); \
    }                                                                    \
  }                                                                      \
  BENCHMARK(BENCHMARK_NAME)->Name(FULL_BENCHMARK_NAME(BENCHMARK_NAME))

ADD_BENCHMARK(float, float_type);
ADD_BENCHMARK(double, double_type);
#if LDBL_MANT_DIG == 64
ADD_BENCHMARK(long double, long_double_type);
#endif

ADD_BENCHMARK(bool, bool_type);
ADD_BENCHMARK(int16_t, int16);
ADD_BENCHMARK(uint16_t, uint16);
ADD_BENCHMARK(int32_t, int32);
ADD_BENCHMARK(uint32_t, uint32);
ADD_BENCHMARK(int64_t, int64);
ADD_BENCHMARK(uint64_t, uint64);
#if FMT_USE_INT128
ADD_BENCHMARK(__int128_t, int128);
ADD_BENCHMARK(__uint128_t, uint128);
#endif
ADD_BENCHMARK(std::byte, std_byte);

ADD_BENCHMARK(void*, pointer);

ADD_BENCHMARK(char, char_type);
ADD_BENCHMARK(char const*, char_array);
ADD_BENCHMARK(std::string, std_string);
ADD_BENCHMARK(std::string_view, std_string_view);

BENCHMARK_MAIN();
