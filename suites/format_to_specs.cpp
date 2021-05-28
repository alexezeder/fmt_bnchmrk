#include <benchmark/benchmark.h>
#include <fmt/format.h>

#include <string_view>

#include "macros.hpp"
#include "pseudo_random.hpp"

#define ADD_BENCHMARK(FORMAT_STRING, TYPE, BENCHMARK_NAME)   \
  static void BENCHMARK_NAME(benchmark::State& state) {      \
    char buffer[100];                                        \
    auto gen = pseudo_random_generator<TYPE>{};              \
    for (auto _ : state) {                                   \
      benchmark::DoNotOptimize(                              \
          fmt::format_to(buffer, FORMAT_STRING, gen.get())); \
    }                                                        \
  }                                                          \
  BENCHMARK(BENCHMARK_NAME)->Name(FULL_BENCHMARK_NAME(BENCHMARK_NAME))

ADD_BENCHMARK("{:8}", char, align_width);

ADD_BENCHMARK("{:<8}", char, align_left);
ADD_BENCHMARK("{:^8}", char, align_middle);
ADD_BENCHMARK("{:>8}", char, align_right);

ADD_BENCHMARK("{:*^8}", char, fill);
ADD_BENCHMARK("{:🤡^8}", char, fill_unicode);

ADD_BENCHMARK("{:+}", int, sign_plus_integer);
ADD_BENCHMARK("{:-}", int, sign_minus_integer);
ADD_BENCHMARK("{: }", int, sign_space_integer);
ADD_BENCHMARK("{:+}", float, sign_plus_float);
ADD_BENCHMARK("{:-}", float, sign_minus_float);
ADD_BENCHMARK("{: }", float, sign_space_float);

ADD_BENCHMARK("{:08}", int, zero_integer);
ADD_BENCHMARK("{:08}", float, zero_float);

ADD_BENCHMARK("{:.4}", float, precision_float);
ADD_BENCHMARK("{:8.4}", std::string_view, precision_string_view);

ADD_BENCHMARK("{:b}", int, type_bin_lower_integer);
ADD_BENCHMARK("{:B}", int, type_bin_upper_integer);
ADD_BENCHMARK("{:d}", int, type_dec_integer);
ADD_BENCHMARK("{:o}", int, type_oct_integer);
ADD_BENCHMARK("{:x}", int, type_hex_lower_integer);
ADD_BENCHMARK("{:X}", int, type_hex_upper_integer);
ADD_BENCHMARK("{:L}", int, type_locale_integer);
ADD_BENCHMARK("{:}", int, type_none_integer);

ADD_BENCHMARK("{:a}", float, type_hex_lower_float);
ADD_BENCHMARK("{:A}", float, type_hex_upper_float);
ADD_BENCHMARK("{:e}", float, type_exponent_lower_float);
ADD_BENCHMARK("{:E}", float, type_exponent_upper_float);
ADD_BENCHMARK("{:f}", float, type_fixed_lower_float);
ADD_BENCHMARK("{:F}", float, type_fixed_upper_float);
ADD_BENCHMARK("{:g}", float, type_general_lower_float);
ADD_BENCHMARK("{:G}", float, type_general_upper_float);
ADD_BENCHMARK("{:L}", float, type_locale_float);
ADD_BENCHMARK("{:}", float, type_none_float);

BENCHMARK_MAIN();
