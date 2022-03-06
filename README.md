## Benchmarks of [{fmt}](https://github.com/fmtlib/fmt)

**[Check out the latest results online](https://alexezeder.github.io/fmt_bnchmrk/)**

### How to build

0. Get [{fmt}](https://github.com/fmtlib/fmt) and [google-benchmark](https://github.com/google/benchmark):
   ```bash
   git clone https://github.com/google/benchmark.git
   git clone https://github.com/fmtlib/fmt.git
   # or
   wget -q --content-disposition https://github.com/google/benchmark/archive/refs/tags/v1.5.3.zip
   wget -q https://github.com/fmtlib/fmt/releases/download/7.1.3/fmt-7.1.3.zip
   ```

1. To configure this project you should choose one of the following scenarios:

* You can have both {fmt} and google-benchmark _installed_, in this case, the commands would be:
  ```bash
  # in directory A: configure, build and install google-benchmark
  cmake -DCMAKE_BUILD_TYPE=Release \
        -DBENCHMARK_ENABLE_TESTING=OFF \
        -DBENCHMARK_ENABLE_GTEST_TESTS=OFF \
        <google-benchmark-path>
  cmake --build . --target install
  
  # in directory B: configure, build and install {fmt}
  cmake -DCMAKE_BUILD_TYPE=Release \
        -DFMT_DOC=OFF \
        -DFMT_TEST=OFF \
        <{fmt}-path>
  cmake --build . --target install
  
  # in directory C: configure this project
  cmake -DCMAKE_BUILD_TYPE=Release <this-project-path>
  ```

* Otherwise, you should pass {fmt} and google-benchmark paths to CMake on configuration:
  ```bash
  cmake -DCMAKE_BUILD_TYPE=Release \
        -DFMT_BNCHMRK_BENCHMARK_REPO_PATH=<google-benchmark-path> \
        -DFMT_BNCHMRK_FMT_REPO_PATH=<{fmt}-path> \
        <this-project-path>
  ```

2. Build configured project:
   ```bash
   cmake --build . 
   ```

3. After the build step, you can find the `output` folder, this folder contains executables
   for all benchmark suites. Run the desired ones:
   ```bash
   output/format_to_args # you can pass any google-benchmark arguments you want
   ```

### Automated run

There is a [satellite project](https://github.com/alexezeder/fmt_bnchmrk_gnrtr) to run these
benchmarks automatically and generate results as HTML pages. The results
[are available](https://alexezeder.github.io/fmt_bnchmrk/) on GitHub Pages
for this repository.


### Feel free to open issues and PRs.
