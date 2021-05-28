#pragma once

#include <cstddef>

template <typename T> struct pseudo_random_generator {
  T const& get() noexcept;

 private:
  size_t current_index = 0;
};
