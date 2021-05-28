add_library(fmt_bnchmrk_utils OBJECT pseudo_random.cpp)
add_library(fmt_bnchmrk::utils ALIAS fmt_bnchmrk_utils)
target_include_directories(fmt_bnchmrk_utils PUBLIC ${CMAKE_CURRENT_LIST_DIR})
