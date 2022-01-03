import React, { Component } from "react";

export default class LoginPage extends Component {
    render() {
        return (
    <div class="bg-blue-200 flex">
        <div class="flex-col flex ml-auto mr-auto items-center w-full lg:w-2/3 md:w-3/5">
        <h1 class="font-bold text-2xl my-10 text-white"> Login </h1>
    <form action="" class="mt-2 flex flex-col lg:w-1/2 w-8/12">
                <div class="flex flex-wrap w-full mb-4 relative h-15 bg-white items-center rounded mb-6 pr-10">
                <div class="flex -mr-px justify-center w-15 p-4">
                    <span
                    class="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600"
                    >
                    <i class="fas fa-user-circle"></i>
                    </span>
                </div>
                <input
                    type="text"
                    class="flex-shrink flex-grow leading-normal w-px flex-1 border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
                    placeholder="Username"/>
                </div>
                <div class="flex flex-wrap w-full relative h-15 bg-white items-center rounded mb-4">
                <div class="flex -mr-px justify-center w-15 p-4">
                    <span
                    class="flex items-center leading-normal bg-white rounded rounded-r-none text-xl px-3 whitespace-no-wrap text-gray-600"> 
                    <i class="fas fa-lock"></i>
                    </span>
                </div>
                <input
                    type="password"
                    class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 px-3 relative self-center font-roboto text-xl outline-none"
                    placeholder="Password"/>
                <div class="flex -mr-px">
                    <span
                    class="flex items-center leading-normal bg-white rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600">
                    <i class="fas fa-eye-slash"></i>
                    </span>
                </div>
                </div>
                <a href="#" class="text-base text-white text-right font-roboto leading-normal hover:underline mb-6">Forget Password ?</a>
                <a
                href="/"
                class="bg-blue-400 py-4 text-center px-17 md:px-12 md:py-4 text-white rounded leading-tight text-xl md:text-base font-sans mt-4 mb-20">
                    Login
            </a>
            </form>
    </div>
    </div>
        );
    }
}

export default LoginPage