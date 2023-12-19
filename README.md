## 创建新项目：
```
npx react-native init RNProject --template react-native-template-typescript
```

## pod install报错：
```
Traceback (most recent call last):
	4: from /Users/zhangzhong/.rvm/gems/ruby-2.7.5/bin/ruby_executable_hooks:22:in `<main>'
	3: from /Users/zhangzhong/.rvm/gems/ruby-2.7.5/bin/ruby_executable_hooks:22:in `eval'
	2: from /Users/zhangzhong/.rvm/gems/ruby-2.7.5/bin/pod:23:in `<main>'
	1: from /Users/zhangzhong/.rvm/rubies/ruby-2.7.5/lib/ruby/2.7.0/rubygems.rb:296:in `activate_bin_path'
/Users/zhangzhong/.rvm/rubies/ruby-2.7.5/lib/ruby/2.7.0/rubygems.rb:277:in `find_spec_for_exe': can't find gem cocoapods (>= 0.a) with executable pod (Gem::GemNotFoundException)

```
fix: 根目录执行 bundle install


### 目录

### [navigation](./docs/navigation.md)