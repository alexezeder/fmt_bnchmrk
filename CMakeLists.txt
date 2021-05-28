cmake_minimum_required(VERSION 3.12..3.20)
project(fmt_bnchmrk)

if (FMT_BNCHMRK_BENCHMARK_REPO_PATH)
    set(BENCHMARK_ENABLE_TESTING OFF)
    set(BENCHMARK_ENABLE_INSTALL OFF)
    set(BENCHMARK_ENABLE_GTEST_TESTS OFF)
    add_subdirectory(${FMT_BNCHMRK_BENCHMARK_REPO_PATH} "${CMAKE_BINARY_DIR}/benchmark")
else()
    find_package(benchmark REQUIRED)
endif()

if (FMT_BNCHMRK_FMT_REPO_PATH)
    add_subdirectory(${FMT_BNCHMRK_FMT_REPO_PATH} "${CMAKE_BINARY_DIR}/fmt")
else()
    find_package(fmt REQUIRED)
endif()

add_subdirectory(utils)

file(GLOB suites RELATIVE ${CMAKE_CURRENT_LIST_DIR} ${CMAKE_CURRENT_LIST_DIR}/suites/*.cpp)
foreach (suite_cpp ${suites})
    get_filename_component(name ${suite_cpp} NAME_WE)
    add_executable(fmt_bnchmrk_${name} ${suite_cpp})
    target_link_libraries(fmt_bnchmrk_${name} PRIVATE benchmark::benchmark fmt::fmt fmt_bnchmrk::utils)
    target_compile_definitions(fmt_bnchmrk_${name} PRIVATE SUITE_NAME=${name})
    target_compile_options(fmt_bnchmrk_${name} PRIVATE ${PEDANTIC_COMPILE_FLAGS}) # from {fmt}
    add_custom_command(TARGET fmt_bnchmrk_${name}
        POST_BUILD
        COMMAND ${CMAKE_COMMAND} -E make_directory ${CMAKE_BINARY_DIR}/output
        COMMAND ${CMAKE_COMMAND} -E create_symlink $<TARGET_FILE:fmt_bnchmrk_${name}> ${CMAKE_BINARY_DIR}/output/${name}
        COMMENT "Make a \"${name}\" link to \"fmt_bnchmrk_${name}\" executable in \"output\""
    )
endforeach()
