#include <benchmark/benchmark.h>
#include <fmt/format.h>

#include <string_view>

#include "macros.hpp"
#include "pseudo_random.hpp"

static void order_auto(benchmark::State& state) {
  char buffer[100];
  auto gen = pseudo_random_generator<char>{};
  for (auto _ : state) {
    benchmark::DoNotOptimize(
        fmt::format_to(buffer, "{} {} {}", gen.get(), gen.get(), gen.get()));
  }
}
BENCHMARK(order_auto)->Name(FULL_BENCHMARK_NAME(order_auto));

static void order_manual(benchmark::State& state) {
  char buffer[100];
  auto gen = pseudo_random_generator<char>{};
  for (auto _ : state) {
    benchmark::DoNotOptimize(
        fmt::format_to(buffer, "{2} {1} {0}", gen.get(), gen.get(), gen.get()));
  }
}
BENCHMARK(order_manual)->Name(FULL_BENCHMARK_NAME(order_manual));

static void named(benchmark::State& state) {
  char buffer[100];
  auto gen = pseudo_random_generator<char>{};
  for (auto _ : state) {
    using namespace fmt::literals;
    benchmark::DoNotOptimize(
        fmt::format_to(buffer, "{c_arg} {b_arg} {a_arg}", "a_arg"_a = gen.get(),
                       "b_arg"_a = gen.get(), "c_arg"_a = gen.get()));
  }
}
BENCHMARK(named)->Name(FULL_BENCHMARK_NAME(named));

static void order_auto_dynamic_specs(benchmark::State& state) {
  char buffer[100];
  auto gen = pseudo_random_generator<std::string_view>{};
  for (auto _ : state) {
    benchmark::DoNotOptimize(
        fmt::format_to(buffer, "{:{}.{}}", gen.get(), 8, 3));
  }
}
BENCHMARK(order_auto_dynamic_specs)
    ->Name(FULL_BENCHMARK_NAME(order_auto_dynamic_specs));

static void order_manual_dynamic_specs(benchmark::State& state) {
  char buffer[100];
  auto gen = pseudo_random_generator<std::string_view>{};
  for (auto _ : state) {
    benchmark::DoNotOptimize(
        fmt::format_to(buffer, "{2:{1}.{0}}", 3, 8, gen.get()));
  }
}
BENCHMARK(order_manual_dynamic_specs)
    ->Name(FULL_BENCHMARK_NAME(order_manual_dynamic_specs));

static void named_dynamic_specs(benchmark::State& state) {
  char buffer[100];
  auto gen = pseudo_random_generator<std::string_view>{};
  for (auto _ : state) {
    using namespace fmt::literals;
    benchmark::DoNotOptimize(fmt::format_to(buffer, "{c_arg:{b_arg}.{a_arg}}",
                                            "a_arg"_a = 3, "b_arg"_a = 8,
                                            "c_arg"_a = gen.get()));
  }
}
BENCHMARK(named_dynamic_specs)->Name(FULL_BENCHMARK_NAME(named_dynamic_specs));

BENCHMARK_MAIN();
