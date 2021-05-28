#include "pseudo_random.hpp"

#include <array>
#include <cstddef>
#include <cstdint>
#include <limits>
#include <string>
#include <string_view>
#include <type_traits>

template <typename T, typename Enable = void> struct pseudo_random_data {
  pseudo_random_data() = delete;
};

template <typename T>
struct pseudo_random_data<T, std::enable_if_t<std::is_same_v<T, bool>>> {
  constexpr static auto items = std::array{
      true,
      false,
  };
};

template <typename T>
struct pseudo_random_data<
    T,
    std::enable_if_t<!std::is_same_v<T, bool> && !std::is_same_v<T, char> &&
                     (std::is_integral_v<T> || std::is_same_v<T, std::byte>)>> {
  constexpr static auto items = std::array{
      T{0},
      T{1},
      T{2},
      T{4},
      T{42},
      std::numeric_limits<T>::min(),
      std::numeric_limits<T>::max(),
  };
};

template <typename T>
struct pseudo_random_data<T, std::enable_if_t<std::is_floating_point_v<T>>> {
  constexpr static auto items = std::array{
      T{0.0},
      T{0.123456789},
      T{0.23456789},
      T{4.23456789},
      T{42.0},
      std::numeric_limits<T>::min(),
      std::numeric_limits<T>::max(),
      std::numeric_limits<T>::lowest(),
      std::numeric_limits<T>::infinity(),
      -std::numeric_limits<T>::infinity(),
      std::numeric_limits<T>::quiet_NaN(),
      std::numeric_limits<T>::signaling_NaN(),
  };
};

template <typename T>
struct pseudo_random_data<T, std::enable_if_t<std::is_same_v<T, char>>> {
  constexpr static auto items = std::array{
      T{41},
      T{42},
      T{43},
  };
};

template <typename T>
struct pseudo_random_data<
    T, std::enable_if_t<std::is_same_v<T, char const*> ||
                        std::is_same_v<T, std::string> ||
                        std::is_same_v<T, std::string_view>>> {
  inline static auto items = std::array{
      T(""),
      T("foo"),
      T("bar"),
      T("text message"),
      T("loooooooooooooooooooooooooooooooooong text message"),
  };
};

template <typename T>
struct pseudo_random_data<T, std::enable_if_t<std::is_same_v<T, void*>>> {
  inline static auto items = std::array{
      reinterpret_cast<void*>(0x0),
      reinterpret_cast<void*>(0x42),
      reinterpret_cast<void*>(0xdeadbeef),
  };
};

template <typename T> T const& pseudo_random_generator<T>::get() noexcept {
  auto const& items = pseudo_random_data<T>::items;
  return items[current_index++ % items.size()];
}

template class pseudo_random_generator<float>;
template class pseudo_random_generator<double>;
template class pseudo_random_generator<long double>;

template class pseudo_random_generator<bool>;
template class pseudo_random_generator<int16_t>;
template class pseudo_random_generator<uint16_t>;
template class pseudo_random_generator<int32_t>;
template class pseudo_random_generator<uint32_t>;
template class pseudo_random_generator<int64_t>;
template class pseudo_random_generator<uint64_t>;
#if defined(__SIZEOF_INT128__)
template class pseudo_random_generator<__int128_t>;
template class pseudo_random_generator<__uint128_t>;
#endif
template class pseudo_random_generator<std::byte>;

template class pseudo_random_generator<void*>;

template class pseudo_random_generator<char>;
template class pseudo_random_generator<char const*>;
template class pseudo_random_generator<std::string>;
template class pseudo_random_generator<std::string_view>;
